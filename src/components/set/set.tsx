import style from './set.module.scss';
import { useRef, useState } from 'react';
import { useIntervalTimeStore } from '../../atom/app-atom';

export default function Set({ set }: { set: any }) {
  const { setIntervalTime } = useIntervalTimeStore();
  const [time, setTime] = useState('30s'); // user가 입력한 값// 기본값은 30s임.
  // 만약 유저가 이 값을 변경하려고 클릭하면 즉시 값은 초기화됨(handleFocus 함수). 사용자가 값을 수정하려고 input을 클릭하는 것이므로 값이 초기화되는 것이 맞음.
  const inputRef: any = useRef(null);

  const handleTimeChange = (e: any) => {
    const inputValue = e.target.value.replace(/\D/g, ''); // 숫자만 허용
    let formattedTime = '';

    // 입력 자리수 제한: 4자리 이하로 고정
    if (inputValue.length > 4) {
      return; // 4자리 이상 입력 불가
    }

    if (inputValue === '0000') {
      return;
    }

    if (inputValue.length === 1) {
      formattedTime = `${inputValue}s`;
    } else if (inputValue.length === 2) {
      const seconds = inputValue; // 문자열로 유지
      formattedTime = `${seconds}s`;
    } else if (inputValue.length === 3) {
      const minutes = inputValue.slice(0, 2);
      const seconds = inputValue.slice(2);
      formattedTime = `${minutes}m:${seconds}s`;
    } else if (inputValue.length === 4) {
      const minutes = inputValue.slice(0, 2);
      const seconds = inputValue.slice(2);
      formattedTime = `${minutes}m:${seconds}s`;
    }

    setTime(formattedTime);
  };

  const handleKeyDown = (e: any) => {
    if (e.code === 'Enter' || e.keyCode === 13) {
      // enter
      onSet(time);
    }

    if (
      e.code === 'Backspace' ||
      e.code === 'Delete' ||
      e.keyCode === 8 || // backspace
      e.keyCode === 46 // del
    ) {
      const inputValue = e.target.value.replace(/\D/g, '');
      if (inputValue.length === 0) {
        setTime('');
      } else {
        const newInputValue = inputValue.slice(0, -1);
        let formattedTime = '';

        if (newInputValue.length === 1) {
          formattedTime = `${newInputValue}s`;
        } else if (newInputValue.length === 2) {
          formattedTime = `${newInputValue}s`;
        } else if (newInputValue.length === 3) {
          formattedTime = `${newInputValue.slice(0, 2)}m:${newInputValue.slice(
            2
          )}s`;
        } else if (newInputValue.length === 4) {
          formattedTime = `${newInputValue.slice(0, 2)}m:${newInputValue.slice(
            2
          )}s`;
        } else if (newInputValue.length > 4) {
          const minutes = newInputValue.slice(0, 2);
          const seconds = newInputValue.slice(2);
          formattedTime = `${minutes}m:${seconds.padStart(2, '0')}s`;
        }

        // 분이 1자리일 경우, 분과 초를 다시 계산하여 올바르게 표시
        if (formattedTime.includes('m') && !formattedTime.includes(':')) {
          const minutePart = formattedTime.replace('m', '');
          formattedTime = `${minutePart}m:00s`;
        }

        setTime(formattedTime);
      }
    }
  };

  const handleFocus = () => {
    setTime('');
    inputRef.current.select(); // 입력 필드에 포커스 후 전체 선택
  };

  const onSet = (timeString: string) => {
    // timeString: 11m:33s
    // timeNumber: 1133
    const timeNumber = timeString.replace(/m|s|:/g, '');
    const digit = timeNumber.length;

    // 사용자 입력값이 없으면 digit이 0임
    if (digit <= 2) {
      if (Number(timeNumber) != 0) {
        // 0일때는 아무것도 작동해선 안됨
        // console.log('초');

        setIntervalTime(Number(timeNumber));
        set(timeNumber);
      }
    }

    if (digit >= 3) {
      // console.log('분'); // 분은 초로 바꾸기
      const min = timeNumber.substring(0, 2);
      const sec = timeNumber.substring(2);
      const calcedTime = Number(min) * 60 + Number(sec);

      setIntervalTime(Number(calcedTime));
      set(calcedTime);
    }
  };

  // useEffect(() => {
  //   if (inputRef.current) {
  //     setTimeout(() => {
  //       inputRef.current.focus();
  //     }, 100);
  //   }
  // }, []);

  return (
    <main
      // onClick={() => {
      //   if (inputRef.current) {
      //     inputRef.current.focus();
      //   }
      // }}
      className={style.main}
    >
      <div className={style.mainWrapper}>
        <header className={style.header}>
          <h1 className={style.title}>
            <span title="Set">Set</span>
          </h1>
          <p className={style.description}>
            {/* the time interval */}
            <span title="시간 간격을 설정하세요.">시간 간격을 설정하세요.</span>
          </p>
          <p className={style.description}>
            {/* Enter a number over 0 seconds */}
            <span title="0초 보다 큰수 만 입력이 가능합니다.">
              0초 보다 큰수 만 입력이 가능합니다.
            </span>
          </p>
        </header>
        <div className={style.inputContainer}>
          <input
            className={style.inputElem}
            type="text"
            value={time}
            onChange={handleTimeChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            ref={inputRef}
            placeholder={`mm:ss`}
          />
        </div>
        <footer className={style.footer}>
          <button
            className={style.setButton}
            onClick={(e: any) => {
              e.stopPropagation();
              onSet(time);
            }}
          >
            Set
          </button>
        </footer>
      </div>
    </main>
  );
}
