import React, { useImperativeHandle, forwardRef } from 'react'

const TestComponent1 = forwardRef((props, ref) => {
    // console.log('message1')
    const message = () => {
        console.log('message')
    }
    const message2 = () => {
        console.log('message2')
    }
    useImperativeHandle(ref, () => ({
        message,
        message2
    }), []);
    return (
        <h1 {...props}>Component1</h1>
    )
})
export default TestComponent1