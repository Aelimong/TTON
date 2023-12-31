import "../styles/todoDropdown.scss";
import { useState, useRef, useEffect } from "react";
// chageColor = 입력받은 color로 현재 boxColor를 바꿔주는 함수
import { ChangeTodoColor } from "./ChangeTodoColor";
import { ChangeDoingColor } from "./ChangeDoingColor";
import { ChangeDoneColor } from "./ChangeDoneColor";
import { ChangeTodoState } from "./ChangeTodoState";
import { ChangeDoingState } from "./ChangeDoingState";
import { ChangeDoneState } from "./ChangeDoneState";
import { DeleteTodo } from "./DeleteTodo";
import { DeleteDoing } from "./DeleteDoing";
import { DeleteDone } from "./DeleteDone";

// 함수앞에 use 붙이고 upper형식으로 적어주기!!(오류)
export default function useTodoDropdown(props: any) {
  const { boxColor, stateColor, todoId, doingId, doneId } = props;

  // 색깔별로 다르게 변수 설정해주어야 현재 색상이 반영됨
  const [todoStateColor, setTodoStateColor] = useState(stateColor[0]);
  const [doingStateColor, setDoingStateColor] = useState(stateColor[1]);
  const [doneStateColor, setDoneStateColor] = useState(stateColor[2]);

  const [pinkColor, setPinkColor] = useState(boxColor[0]);
  const [greenColor, setGreenColor] = useState(boxColor[1]);
  const [grayColor, setGrayColor] = useState(boxColor[2]);
  const [brownColor, setBrownColor] = useState(boxColor[3]);

  const states = ["--status-green", "--status-yellow", "--status-gray"];
  const colors = [
    "--select-pink",
    "--select-green",
    "--select-gray",
    "--select-brown",
  ];

  return (
    <>
      <div className="dropContainer shadow">
        <div className="changeState">상태 변경</div>

        <div className="selectState">
          <div
            className="selectTodo"
            onClick={() => {
              setTodoStateColor(states[0]);
              todoId
                ? ChangeTodoState(todoStateColor, todoId)
                : doingId
                ? ChangeDoingState(todoStateColor, doingId)
                : ChangeDoneState(todoStateColor, doneId);
            }}
          >
            <div className="stateTodo">예정</div>
          </div>
          <div
            className="selectDoing"
            onClick={() => {
              setDoingStateColor(states[1]);
              todoId
                ? ChangeTodoState(doingStateColor, todoId)
                : doingId
                ? ChangeDoingState(doingStateColor, doingId)
                : ChangeDoneState(doingStateColor, doneId);
            }}
          >
            <div className="stateDoing">진행 중</div>
          </div>
          <div
            className="selectDone"
            onClick={() => {
              setDoneStateColor(states[2]);
              todoId
                ? ChangeTodoState(doneStateColor, todoId)
                : doingId
                ? ChangeDoingState(doneStateColor, doingId)
                : ChangeDoneState(doneStateColor, doneId);
            }}
          >
            <div className="stateDone">완료</div>
          </div>
        </div>
        <hr
          style={{
            height: "0.1rem",
            backgroundColor: `var(--main-color-20)`,
            border: "0",
          }}
        />
        <div className="changeColor">색상 변경</div>
        <div className="selectColor">
          <div
            className="selectPink"
            onClick={() => {
              setPinkColor(colors[0]);
              todoId
                ? ChangeTodoColor(pinkColor, todoId)
                : doingId
                ? ChangeDoingColor(pinkColor, doingId)
                : ChangeDoneColor(pinkColor, doneId);
            }}
          >
            <div className="pink"></div>
          </div>
          <div
            className="selectGreen"
            onClick={() => {
              setGreenColor(colors[1]);
              todoId
                ? ChangeTodoColor(greenColor, todoId)
                : doingId
                ? ChangeDoingColor(greenColor, doingId)
                : ChangeDoneColor(greenColor, doneId);
            }}
          >
            <div className="green"></div>
          </div>
          <div
            className="selectGray"
            onClick={() => {
              setGrayColor(colors[2]);
              todoId
                ? ChangeTodoColor(grayColor, todoId)
                : doingId
                ? ChangeDoingColor(grayColor, doingId)
                : ChangeDoneColor(grayColor, doneId);
            }}
          >
            <div className="gray"></div>
          </div>
          <div
            className="selectBrown"
            onClick={() => {
              setBrownColor(colors[3]);
              todoId
                ? ChangeTodoColor(brownColor, todoId)
                : doingId
                ? ChangeDoingColor(brownColor, doingId)
                : ChangeDoneColor(brownColor, doneId);
            }}
          >
            <div className="brown"></div>
          </div>
        </div>
        <hr
          style={{
            height: "0.1rem",
            backgroundColor: `var(--main-color-20)`,
            border: "0",
          }}
        />
        <div
          className="delete"
          onClick={() => {
            todoId
              ? DeleteTodo(todoId)
              : doingId
              ? DeleteDoing(doingId)
              : DeleteDone(doneId);
          }}
        >
          일정 삭제
        </div>
      </div>
    </>
  );
}
