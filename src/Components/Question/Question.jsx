import React, { useState } from 'react';
import { CgQr } from 'react-icons/cg';

function Question() {
    const [step, setStep] = useState(0);
    const [answerClick, setAnswerClick] = useState({})
    const [resultUser, setResultUser] = useState({})
    const [showResult, setShowResult] = useState(false)
    console.log(answerClick, "answerClick")
    const mcq = [
        {
            "id": 1,
            "question": "What is React.js primarily used for?",
            "option": {
                "A": "Server-side development",
                "B": "Building user interfaces",
                "C": "Database management",
                "D": "Styling web pages"
            },
            type: 'select',
            "answer": "B"
        },

        {
            "id": 2,
            "question": "Your Favorite Subject?",
            type: "skip"


        },
        {
            "id": 3,
            "question": "Select your skills",
            "skills": {
                "A": "React.js,",
                "B": "Angular,",
                "C": "Vue.js,",
                "D": "Node.js,"
            },
            type: "Select"
        }
        ,
        {
            "id": 4,
            "question": "How do you pass data from a parent to a child component in React?",
            "option": {
                "A": "Using Redux",
                "B": "Using Context",
                "C": "Via Props",
                "D": "Using Hooks"
            },
            type: "select",
            "answer": "C"
        },

        {
            "id": 5,
            "question": "Do you like React.js?",
            "option": {
                "A": "Yes",
                "B": "No",
            },
            type: "radio",

        }
        ,
        {
            "id": 6,
            "question": "What is the result of 15 ÷ 3 + 4 × 2?",
            type: "input",
            "answer": "13"
        },
        {
            "id": 7,
            "question": "What does JSX stand for?",
            "option": {
                "A": "JavaScript XML",
                "B": "Java Syntax Extension",
                "C": "JavaScript Extension",
                "D": "JavaScript XHTML"
            },
            type: 'select',
            "answer": "A"
        }

    ]
    const currentQuestion = mcq[step];

    const pageQuestion = 1
    const handleNext = () => {
        if (step < mcq.length - 1) {
            setStep((prev) => prev + 1);
        }
    };

    const backQuestion = () => {

        setStep((prev) => (prev - pageQuestion), mcq.length)
        setResultUser("")

    };

    const totleScore = () => {

        let score = 0;
        mcq.forEach((q) => {

            if (answerClick[q.id] === q.answer) {
                score++;
            }
        });

        if (score > 3) {
            setResultUser(`🎉 Congratulations! You have passed this test. Your total score is ${score} out of ${6} `)
        } else {
            setResultUser(`❌ You did not pass. Your total score is ${score} out of ${6} `)
        }
        setShowResult(true)


    };
    const handleAnswer = (id, value, checked) => {
        setAnswerClick((prev) => {
            const selectValues = { ...prev }
            if (checked) {
                selectValues[id] = selectValues[id] ? [...selectValues[id], value] : [value]
            } else {
                selectValues[id] = selectValues[id]?.filter((id) => id !== value)
            }
            return selectValues;
        })

    }
    const handleInputChange = (id, key) => {

        setAnswerClick((prev) => ({ ...prev, [id]: key }));


    }
    const handleInputRadio = (id, key) => {
        console.log(id, key)
        setAnswerClick((prev) => ({ ...prev, [id]: key }));

    }

    const handleSkill = (id, value, isChecked) => {
        setAnswerClick((prev) => {
            const updatedSkills = { ...prev };

            if (isChecked) {
                // If checked, add skill
                updatedSkills[id] = updatedSkills[id] ? [...updatedSkills[id], value] : [value];
            } else {
                // If unchecked, remove skill
                updatedSkills[id] = updatedSkills[id]?.filter((s) => s !== value);

            }

            return updatedSkills;
        });
    };



    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-300 to-gray-500 p-4">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
                {!showResult ?
                    <div className="w-full max-w-2xl bg-white p-6 mt-3 rounded-lg">
                        <div className="space-y-2">
                            {mcq.slice(step, step + pageQuestion).map((q, index) => (
                                <div key={index} className="py-3">
                                    <h1 className="text-2xl font-bold text-white bg-red-500 rounded-lg px-6 py-3 mb-4">
                                        {q.id} :- {q.question}
                                    </h1>
                                    <div className="space-y-3">
                                        {q.type === "select" ? (
                                            Object.entries(q?.option || {}).map(([optionKey, value]) => (
                                                //     <button
                                                //         onClick={() => handleAnswer(q.id, optionKey, q.question)}
                                                //         key={optionKey}
                                                //         className={`flex gap-2 w-full items-center hover:bg-blue-700 hover:text-white p-4 border rounded-2xl 
                                                // ${answerClick[q.id] === optionKey ? "bg-blue-700 text-white" : ""}`}
                                                //     >
                                                //         <h3 className="font-bold">{optionKey}: {value}</h3>
                                                //     </button>
                                                <div className='flex items-center gap-2'>
                                                    <input
                                                        className='w-4 h-5'
                                                        onChange={(e) => handleAnswer(q.id, value, e.target.checked)}
                                                        type='checkbox' />
                                                    <label htmlFor="">{value}</label>
                                                </div>
                                            ))
                                        ) : q.type === "input" ? (
                                            <input
                                                type="number"
                                                className="text-black w-full px-4 py-2 rounded-xl border"
                                                placeholder="Enter Your Answer"
                                                onChange={(e) => handleInputChange(q.id, e.target.value)}
                                                value={answerClick[6]}
                                            />
                                        ) : q.type === "radio" ? (
                                            <div className="flex flex-col gap-4 p-4 border rounded-xl shadow-md bg-gray-100">
                                                {Object.entries(q?.option || {}).map(([optionKey, value]) => (
                                                    <div key={optionKey} className="flex items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            name={`radio-${q.id}`}
                                                            id={`${optionKey}-${q.id}`}
                                                            onChange={() => handleInputRadio(q.id, optionKey)}
                                                            checked={answerClick[q.id] === optionKey}
                                                            className="w-5 h-5 accent-blue-500 cursor-pointer border"
                                                        />
                                                        <label htmlFor={`${optionKey}-${q.id}`} className="text-lg font-medium text-gray-800 cursor-pointer">
                                                            {value}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : q.type === "skip" ? (
                                            <input
                                                type="text"
                                                placeholder="Enter "
                                                value={answerClick[2]}
                                                onChange={(e) => handleInputChange(q.id, e.target.value)}
                                                className="text-black w-full px-4 py-2 rounded-xl border"
                                            />
                                        ) : q.type === "Select" ? (
                                            mcq?.map((Skill, index) => (
                                                <div key={index} className="  ">
                                                    {Object.entries(Skill?.skills || {}).map(([key, value]) => (
                                                        <div key={key} className="flex items-center gap-3 border-b py-2 last:border-none">
                                                            <input
                                                                type="checkbox"
                                                                onChange={(e) => handleSkill(Skill.id, value, e.target.checked)}
                                                                className="w-5 h-5 accent-blue-600 cursor-pointer"
                                                            />
                                                            <label className="text-lg font-medium text-gray-800">{value}</label>
                                                        </div>
                                                    ))}
                                                </div>

                                            ))


                                        ) : null}
                                    </div>
                                    {step === 5 && <h1>{JSON.stringify(resultUser)}</h1>}
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between w-full py-4">
                            {step > 0 && (
                                <button
                                    onClick={backQuestion}
                                    className="bg-blue-600 hover:bg-blue-900 text-white rounded-3xl px-6 py-2 transition duration-300 mr-4"
                                >
                                    Back
                                </button>
                            )}

                            {step === 6 && (
                                <button
                                    onClick={() => totleScore()}
                                    disabled={step !== 1 && !answerClick[mcq[step]?.id]}
                                    className={`${step !== 1 && !answerClick[mcq[step]?.id]
                                        ? 'bg-green-200 cursor-not-allowed'
                                        : 'bg-green-500 hover:bg-green-900'
                                        } text-white rounded-3xl px-6 py-2 transition duration-300`}
                                >


                                    Submit
                                </button>
                            )}

                            {step + pageQuestion < mcq?.length && (
                                <button
                                    onClick={handleNext}
                                    disabled={step !== 1 && !answerClick[mcq[step]?.id]}
                                    className={`${step !== 1 && !answerClick[mcq[step]?.id]
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-900'
                                        } text-white rounded-3xl px-6 py-2 transition duration-300`}
                                >
                                    {step === 1 && !answerClick[mcq[step]?.id] ? "Skip" : "Next"}
                                </button>
                            )}
                        </div>
                    </div> :
                    <div>
                        {step === mcq.length - 1 && (
                            <div className="p-6 bg-white rounded-lg  ">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Answer List</h2>
                                {mcq.map((question, index) => (
                                    <div key={index} className="border-b border-gray-300 py-4">
                                        <div>  <p className="text-xl font-medium text-gray-700">{question.question}</p>
                                            <p className="text-lg text-gray-600 mt-2">User Select :- {answerClick[question.id]}</p>
                                            <p className="text-lg text-green-600 mt-2 font-extrabold"> Correct Answer: {question.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                }
            </div></div>

    );
}

export default Question;
