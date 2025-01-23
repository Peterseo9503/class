import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
    // console.log(props.degree);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        const printDot = (x, y) => {
            context.fillRect(x + 250, 250 - y, 1, 1);
        }



        const drawLine2 = (x, y) => {
            const [bigX, bigY, smallX, smallY] = 0 > x ? [0, 0, x, y] : [x, y, 0, 0];
        
            const slope = (bigY - smallY) / (bigX - smallX); // 기울기
            const Yconst = bigY - (bigX * slope); // y절편
        
            // x를 기준으로 선 그리기
            for (let x = Math.round(smallX); x <= Math.round(bigX); x++) {
                const formulaY = x * slope + Yconst; // y 계산
                printDot(Math.round(x), Math.round(formulaY)); // 소수점 반올림 후 점 찍기
            }
        
            // y를 기준으로 선 그리기 (필요 시 추가)
            for (let y = Math.round(smallY); y <= Math.round(bigY); y++) {
                const formulaX = (y - Yconst) / slope; // x 계산
                printDot(Math.round(formulaX), Math.round(y)); // 소수점 반올림 후 점 찍기
            }
        };

        const drawLine = (x, y) => {
            const [bigX, bigY, smallX, smallY] = 0 > x ? [0, 0, x, y] : [x, y, 0, 0];
            const slope = (bigY - smallY) / (bigX - smallX);
            const Yconst = bigY - (bigX * slope);
            for (let x = smallX; x < bigX; x=x+0.1) {
                const fomulaY = x * slope + Yconst;
                printDot(x, fomulaY);
            }
        }

        //100도라고 가정. 
        const inputDegree = Number(props.degree).toFixed(0);
        console.log(inputDegree);;
        const x = (Math.cos((Math.PI / 180) * inputDegree) * 250);
        const y = (Math.sin((Math.PI / 180) * inputDegree) * 250);
        // console.log( Number(props.degree).toFixed(0) );

        drawLine(x, y);

        for (let degree = 0; degree <= 360; degree = degree +1) {
            const radian = (Math.PI / 180) * degree;
            const [x, y] = [Math.cos(radian) * 250, Math.sin(radian) * 250];
            console.log(x,y)
            // if (degree < inputDegree) {
            //     drawLine2(x, y)
            // }
            printDot(Math.cos(radian) * 250, Math.sin(radian) * 250);

            // 중심에서 해당 각도로 선을 채우기
            // for (let r = 0; r <= 250; r++) {
            //     const dotX = Math.cos(radian) * r;
            //     const dotY = Math.sin(radian) * r;
            //     printDot(dotX, dotY); // 중심에서 해당 각도까지 점 찍기
            // }
        }
        for (let x = 0; x <= 250; x++) {
            printDot(x, 0);
        }
    }, [props.degree])
    return <>
        <canvas ref={canvasRef} width="500" height="500" style={{ border: 'solid red' }}>
        </canvas>
    </>
}

export default Canvas;