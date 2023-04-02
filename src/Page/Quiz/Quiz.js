import "./quiz.css"
import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Questions from "../../Components/Question/Question";

const Quiz = ({ name, questions,  score, setScore }) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);

    useEffect(() => {
        console.log(questions);

        setOptions(
            questions &&
            handlShuffle([
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers,
            ])
        );
    }, [questions, currQues]);
    console.log(options);
    const handlShuffle = (optionss) => {
        return optionss.sort(() => Math.random() - 0.5);
    };

    return (
        <div className="quiz">
            <span className="subtitle">Welcome , {name}</span>
            {questions ? (
                <>
                    <div className="quizInfo">
                        <span>{questions[currQues].category}</span>
                        <span>Score : {score}</span>
                    </div>

                    <Questions
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                        questions={questions}
                        options={options}
                        correct={questions[currQues]?.correct_answer}
                        score={score}
                        setScore={setScore}
                    />
                </>
            ) : (
                <CircularProgress
                    style={{ margin: 100 }}
                    size={150}
                    thickness={1}
                    color="inherit"
                />
            )}
        </div>
    );
};

export default Quiz;