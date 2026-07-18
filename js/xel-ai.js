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



For createTask always return EXACTLY this structure:

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

Rules:

- owner MUST be exactly one of:
  Sarah Smith
  John Doe
  Priya Kumar
  David Lee

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
