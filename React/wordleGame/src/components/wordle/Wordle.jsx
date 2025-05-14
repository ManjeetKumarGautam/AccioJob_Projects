"use client";
import { useState, useEffect } from "react";
import "./Wordle.css";

const WORDS = ["APPLE", "BEACH", "CHART", "DANCE", "EARTH", "FLAME", "GRAPE", "HOUSE", "IVORY", "JELLY", "KNIFE", "LEMON", "MUSIC", "NIGHT", "OCEAN", "PIANO", "QUEEN", "RIVER", "SNAKE", "TIGER", "UNCLE", "VOICE", "WATER", "XENON", "YACHT", "ZEBRA", "ONION", "HEIGH", "QUITS"];
const KEYS = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L"], ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"]];

const Wordle = () => {
    const [word, setWord] = useState("");
    const [guesses, setGuesses] = useState([]);
    const [input, setInput] = useState("");
    const [status, setStatus] = useState("playing");
    const [message, setMessage] = useState("");

    useEffect(() => {
        setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    }, []);

    const handleKey = (k) => {
        if (status !== "playing") return;
        if (k === "ENTER") submit();
        else if (k === "⌫") setInput((i) => i.slice(0, -1));
        else if (input.length < 5 && /^[A-Z]$/.test(k)) setInput((i) => i + k);
    };

    const submit = () => {
        if (input.length !== 5) return setMessage("5 letters only!");
        if (!WORDS.includes(input)) return setMessage("Word not found!");

        const newGuesses = [...guesses, input];
        setGuesses(newGuesses);

        if (input === word) {
            setStatus("won");
            setMessage("You Win!");
        } else if (newGuesses.length === 6) {
            setStatus("lost");
            setMessage(`Word was ${word}`);
        }
        setInput("");
    };

    const reset = () => {
        setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
        setGuesses([]);
        setInput("");
        setStatus("playing");
        setMessage("");
    };

    return (
        <div className="wordle-container">
            <h1>WORDLE</h1>
            {message && <div className="message">{message}</div>}

            <div className="board">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="row">
                        {[...Array(5)].map((_, j) => {
                            const letter = guesses[i]?.[j] || (i === guesses.length ? input[j] : "");
                            let cls = "tile";
                            if (guesses[i]) {
                                if (letter === word[j]) cls += " correct";
                                else if (word.includes(letter)) cls += " present";
                                else cls += " incorrect";
                            }
                            return <div key={j} className={cls}>{letter}</div>;
                        })}
                    </div>
                ))}
            </div>

            <div className="keyboard">
                {KEYS.map((row, i) => (
                    <div key={i} className="keyboard-row">
                        {row.map((k) => (
                            <button key={k} onClick={() => handleKey(k)} className="key">{k}</button>
                        ))}
                    </div>
                ))}
            </div>

            {status !== "playing" && <button onClick={reset} className="new-game-btn">New Game</button>}
        </div>
    );
};

export default Wordle;
