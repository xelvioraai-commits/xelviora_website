const OPENAI_API_KEY = "PASTE_YOUR_OPENAI_API_KEY_HERE";

const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

async function askXel(message){

    const response = await fetch(OPENAI_URL,{
        method:"POST",

        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+OPENAI_API_KEY
        },

        body:JSON.stringify({

            model:"gpt-4.1-mini",

            messages:[

                {
                    role:"system",
                    content:`
You are Xel, the AI assistant inside Xelviora.

Always respond ONLY with valid JSON.

Example:

{
  "action":"createTask",
  "title":"Recruitment Drive",
  "department":"HR",
  "owner":"Sarah",
  "dueDate":"Friday"
}

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

    return await response.json();

}
