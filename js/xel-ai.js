const API_KEY = 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

const API_URL = "https://api.groq.com/openai/v1/chat/completions";

async function askXel(message){

    const response = await fetch(OPENAI_URL,{
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
