const API_KEY = "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";

const API_URL = "https://api.groq.com/openai/v1/chat/completions";

async function askXel(message){

    const response = await fetch(API_URL,{
        method:"POST",

        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+API_KEY
        },

        body:JSON.stringify({

            model:"llama-3.3-70b-versatile",

            messages:[

                {
                    role:"system",
                    content:`
You are Xel, the AI assistant inside Xelviora.



If the user is creating a TASK, return EXACTLY this structure:

{
  "action":"createTask",
  "title":"",
  "description":"",
  "department":"",
  "owner":"",
  "members":[],
  "startDate":"",
  "dueDate":"",
  "completed":false
}

If the user is creating a MEETING, return EXACTLY this structure:

{
  "action":"createMeeting",
  "title":"",
  "description":"",
  "department":"",
  "organizer":"",
  "members":[],
  "date":"",
  "startTime":"",
  "endTime":"",
  "location":""
}

Rules:

- owner MUST be exactly one of:
  Sarah Smith
  John Doe
  Priya Kumar
  David Lee
  Chaitra B

- department MUST be exactly one of:
  HR
  Finance
  Marketing
  Sales
  IT

- Assume today's year is 2026.
- startDate and dueDate MUST be in YYYY-MM-DD format using the year 2026.
- If the user says "today", "tomorrow", "Friday", "next Friday", etc., convert it into an actual 2026 date.

- description must never be empty.

For meetings:

- organizer MUST be exactly one of:
  Sarah Smith
  John Doe
  Priya Kumar
  David Lee
  Chaitra B

- department MUST be exactly one of:
  HR
  Finance
  Marketing
  Sales
  IT

- date MUST be in YYYY-MM-DD format using the year 2026.

- startTime and endTime MUST be in 24-hour HH:MM format.

- location can be a meeting room or an online meeting link.


Return JSON only.

Do not use markdown.
Do not explain.
`
                },

                {
                    role:"user",
                    content:message
                }

            ],

            temperature:0.2

        })

    });

    const data = await response.json();

console.log(data);

return data;

}
