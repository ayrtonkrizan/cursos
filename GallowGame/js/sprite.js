createSprite = (tag)=>{
    const $element = $(tag);
    let frame = 0;
    const frames = ['frame1', 'frame2', 'frame3', 'frame4', 'frame5', 'frame6', 'frame7', 'frame8', 'frame9'];
    const lastFrame = frames.length -1;
    $element.addClass(frames[frame]);

    const hasNext = () => frame < lastFrame;
    const moveFrame = (from, to) => $element.toggleClass(from + ' ' + to);

    const nextFrame = () => hasNext()? moveFrame(frames[frame++], frames[frame]):null;

    const reset = () => {
        moveFrame(frames[frame], frame[0]);
        frame = 0;
    }
    
    const isFinished = () => !hasNext();

    return {
        nextFrame,
        reset,
        isFinished
    }
};