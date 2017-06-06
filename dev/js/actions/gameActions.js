
export const updateBoard_Action = (inc) => {
    console.log("data", inc);
    return {
        type: 'UPDATE_BOARD',
        payload: inc
    }
};


export const test_Action = () => {
    console.log("TEST IN ACTION");
    return {
        type: 'TEST'
    }
};