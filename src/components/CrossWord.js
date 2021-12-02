import React, { useCallback, useRef, useState } from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import styled from 'styled-components';

const data = {
    across: {
        1: {
            clue: 'Môn thể thao đồng đội phổ biến ở vùng Bắc Mỹ  ',
            answer: 'LACROSSE',
            row: 3,
            col: 6,
        },
        2: {
            clue: 'Môn thể thao trên tuyết  ',
            answer: 'SKIING',
            row: 4,
            col: 13,
        },
        3: {
            clue: 'Môn thể thao người ghi điểm khi cho bóng vào rổ   ',
            answer: 'BASKETBALL',
            row: 5,
            col: 0,
        },
        4: {
            clue: 'Môn thể thao dưới nước   ',
            answer: 'SWIMMING',
            row: 7,
            col: 11,
        },
        5: {
            clue: 'Môn thể trong nhà ',
            answer: 'BOWLING',
            row: 9,
            col: 1,
        },
        6: {
            clue: 'Môn thể thao dùng bóng và gậy có tên giống con Dế ',
            answer: 'CRICKET',
            row: 13,
            col: 12,
        },
        7: {
            clue: 'Môn thể thao giống quần vợt nhưng chơi trong nhà  ',
            answer: 'TABLETENNIS',
            row: 14,
            col: 0,
        },
        8: {
            clue: 'Môn thể thao có trái bóng hình bầu dục ',
            answer: 'RUGBY',
            row: 15,
            col: 12,
        },
        9: {
            clue: 'Môn thể thao "VUA"  ',
            answer: 'FOOTBALL',
            row: 17,
            col: 7,
        },
    },
    down: {
        1: {
            clue: 'Môn võ sử dụng các thế vật bắt nguồn từ Nhật Bản',
            answer: 'JUDO',
            row: 0,
            col: 10,
        },
        2: {
            clue: 'Môn thể thao người chơi dùng vợt đánh bóng ',
            answer: 'TENNIS',
            row: 0,
            col: 15,
        },
        3: {
            clue: 'Môn thể thao đi dọc theo các đường mòn quanh núi ',
            answer: 'HIKING',
            row: 0,
            col: 17,
        },
        4: {
            clue: 'Môn thể thao chơi trên các bãi biển  ',
            answer: 'VOLLEYBALL',
            row: 1,
            col: 4,
        },
        5: {
            clue: 'Môn thể thao gồm các động tác vật lộn biểu diễn  ',
            answer: 'WRESTLING',
            row: 1,
            col: 13,
        },
        6: {
            clue: 'Môn võ cổ truyền Nhật Bản ',
            answer: 'KARATE',
            row: 2,
            col: 1,
        },
        7: {
            clue: 'Môn thể thao sử dụng nắm đấm để thi đấu trên võ đài  ',
            answer: 'BOXING',
            row: 5,
            col: 6,
        },
        8: {
            clue: 'Môn thể thao bắt nguồn từ Canada và chơi trên sân băng  ',
            answer: 'ICEHOCKEY',
            row: 7,
            col: 16,
        },
        9: {
            clue: 'Môn thể thao liên quan đến các bài tập đòi hỏi thể lực và tinh linh hoạt ',
            answer: 'GYMNASTICS',
            row: 7,
            col: 18,
        },
        10: {
            clue: 'Môn thể thao có người ném và người cầm gậy đánh bóng  ',
            answer: 'BASEBALL',
            row: 9,
            col: 1,
        },
        11: {
            clue: 'Môn thể thao sử dụng vợt để đánh cầu ',
            answer: 'BADMINTON',
            row: 10,
            col: 9,
        },
        12: {
            clue: 'Tên gọi khác của môn thể thao "VUA" ',
            answer: 'SOCCER',
            row: 10,
            col: 12,
        },
        13: {
            clue: 'Môn thể thao chạy xe đạp  ',
            answer: 'CYCLING',
            row: 11,
            col: 3,
        },
        14: {
            clue: 'Môn thể thao sử dụng ván trượt ',
            answer: 'SKATING',
            row: 11,
            col: 5,
        },
        15: {
            clue: 'Môn thể thao dùng gậy đánh bóng vào lỗ trên sân cỏ ',
            answer: 'GOLF',
            row: 15,
            col: 14,
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
.guFLmb {
    cursor: default;
    background-color: rgba(86, 141, 229, 1);
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

            <CrosswordWrapper style={{marginLeft:'300px'}} >
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