import React, { useCallback, useRef, useState } from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import styled from 'styled-components';

const data = {
    across: {
        1: {
            clue: 'one plus one ',
            answer: 'TWO',
            row: 0,
            col: 0,
        },


    },
    down: {
        2: {
            clue: 'three minus two  ',
            answer: 'ONE',
            row: 0,
            col: 2,
        }

    },
};

const Page = styled.div`
  padding: 2em;
`;

const Header = styled.h1`
  margin-bottom: 1em;
  text-align:center;
  color: rgba(86, 141, 229, 1);
`;

const Commands = styled.div`
   text-align:center;
`;

const Command = styled.button`
  margin-right: 1em;
`;

const CrosswordWrapper = styled.div`
  margin-top: 2em;
  max-width: 30em;

  /* and some fun making use of the defined class names */
  .crossword.correct {
    rect {
      stroke: rgb(100, 200, 100) !important;
    }
    svg > rect {
      fill: rgb(100, 200, 100) !important;
    }
    text {
      fill: rgb(100, 200, 100) !important;
    }
  }
  .clue.correct {
    ::before {
      content: '\u2713'; /* a.k.a. checkmark: ✓ */
      display: inline-block;
      text-decoration: none;
      color: rgb(100, 200, 100);
      margin-right: 0.25em;
    }
    
    color: rgb(130, 130, 130);
    
  }
  //cùng hàng
  .bBYsmr {
    display:flex;
 }
 // khoảng cách across, down, màu
 .bBYsmr .direction .header {
    margin-left: 100px;
    margin-top: 0;
    margin-bottom: 0.5em;
    color: rgba(86, 141, 229, 1);
}
// khoảng cách  câu hỏi
.bBYsmr .direction div {
    margin-top: 0.5em;
    margin-left: 55px;
}


`;

const Messages = styled.pre`
  background-color: rgb(230, 230, 230);
  margin: 1em 0;
  padding: 1em;
`;

// in order to make this a more-comprehensive example, and to vet Crossword's
// features, we actually implement a fair amount...

function CrossWord() {
    const crossword = useRef();

    const focus = useCallback((event) => {
        crossword.current.focus();
    }, []);

    const fillAllAnswers = useCallback((event) => {
        crossword.current.fillAllAnswers();
    }, []);

    const reset = useCallback((event) => {
        crossword.current.reset();
    }, []);

    // We don't really *do* anything with callbacks from the Crossword component,
    // but we can at least show that they are happening.  You would want to do
    // something more interesting than simply collecting them as messages.
    const [messages, setMessages] = useState([]);

    const addMessage = useCallback((message) => {
        setMessages((m) => m.concat(`${message}\n`));
    }, []);

    // onCorrect is called with the direction, number, and the correct answer.
    const onCorrect = useCallback(
        (direction, number, answer) => {
            addMessage(`onCorrect: "${direction}", "${number}", "${answer}"`);
        },
        [addMessage]
    );

    // onLoadedCorrect is called with an array of the already-correct answers,
    // each element itself is an array with the same values as in onCorrect: the
    // direction, number, and the correct answer.
    const onLoadedCorrect = useCallback(
        (answers) => {
            addMessage(
                `onLoadedCorrect:\n${answers
                    .map(
                        ([direction, number, answer]) =>
                            `    - "${direction}", "${number}", "${answer}"`
                    )
                    .join('\n')}`
            );
        },
        [addMessage]
    );

    // onCrosswordCorrect is called with a truthy/falsy value.
    const onCrosswordCorrect = useCallback(
        (isCorrect) => {
            addMessage(`onCrosswordCorrect: ${JSON.stringify(isCorrect)}`);
        },
        [addMessage]
    );

    // onCellChange is called with the row, column, and character.
    const onCellChange = useCallback(
        (row, col, char) => {
            addMessage(`onCellChange: "${row}", "${col}", "${char}"`);
        },
        [addMessage]
    );

    return (
        <Page>
            <Header >PLAY CROSSWORD</Header>

            <Commands style={{ textAlign: 'center' }}>
                <button onClick={() => focus()} style={{ padding: 9, margin: 3, backgroundColor: 'rgba(86, 141, 229, 1)', color: 'white', border: 'none' }}>
                    Focus
                </button>
                <button onClick={() => fillAllAnswers()} style={{ padding: 9, margin: 3, backgroundColor: 'rgba(86, 141, 229, 1)', color: 'white', border: 'none' }}>
                    Fill All Answers
                </button>
                <button onClick={() => reset()} style={{ padding: 9, margin: 3, backgroundColor: 'rgba(86, 141, 229, 1)', color: 'white', border: 'none' }}>
                    Reset
                </button>
            </Commands>

            <CrosswordWrapper style={{ marginLeft: '500px' }} >
                <Crossword
                    data={data}
                    ref={crossword}
                    onCorrect={onCorrect}
                    onLoadedCorrect={onLoadedCorrect}
                    onCrosswordCorrect={onCrosswordCorrect}
                    onCellChange={onCellChange}
                />
            </CrosswordWrapper>

            {/* <Messages>{messages}</Messages> */}
        </Page>
    );
}

export default CrossWord;