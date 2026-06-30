    import { NextRequest, NextResponse } from "next/server";
    import { GoogleGenAI } from "@google/genai";

    const gemini_ai = new GoogleGenAI({
        apiKey : process.env.GEMINI_API_KEY
    });

    export async function POST( req : NextRequest ) {

        const { image, mediaType } = await req.json();

        if (!image || !mediaType ) {
            return NextResponse.json({
                error : "Invalid Data, check the params"
            }, {
                status : 400
            });
        }


    try {

        const completion = await gemini_ai.models.generateContent({
            model : "gemini-2.0-flash",
            contents : [
                {
                    role : "user",
                    parts : [
                        {
                            inlineData : {
                                mimeType : mediaType,
                                data : image
                            }
                        },
                        {
                            text : `
                            Você será um analisador de designers UX/UI que observa as fotos que seram repassadas a você e gera possíveis melhorias
                            no design, quero que atenda a esses requisitos enquanto analisa e envia sua visão sobre cada uma para o usuário, não substituindo
                            a visão dele, mas apenas dando uma direção para o usuário, a seguir vão vir os seguintes requisitos

                            1 - Análise de erros de layout do design 
                            Nossa ferramenta analisa o design e verifica se coisas básicas do design estão de acordo,
                            como espaçamento coeso, cores ajustadas, fontes adequadas, visual limpo, entre outros.

                            2 - Sugestão de melhorias de design 
                            Nossa ferramenta também sugere melhorias de design, como se ele corresponde com o padrão de outros sites e se ele está adequado
                            para a otimização dos mecanismos de busca (SEO)

                            3 - Análise de experiência de usuário adequada
                            Visto que uma experiência de usuário adequada é uma das causas de maior retenção de clientes,
                            é um desafio que não pode ser deixado de passar batido
                            `
                        }
                    ]
                }
            ]
        });

        

        const result = completion.text ?? "it was not possible to generate the content"

        return NextResponse.json({ result })
    
        } catch ( err ) {
            console.error("API error: ", err);

            const isQuotaError = err instanceof Error && err.name === "ApiError" && err.message.includes("RESOURCE_EXHAUSTED");

            if ( isQuotaError ) {
                return NextResponse.json({
                    error : "the api of AI needs more money"
                }, {
                    status : 429
                });
            } else {
                return NextResponse.json({
                    error : "error to analyze the image on the server"
                }, {
                    status : 500
                });
            }

        }
    }



