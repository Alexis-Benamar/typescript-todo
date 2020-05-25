import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@material-ui/core'

import StyledContainer from './StyledContainer'

interface IAddTodoForm {
    className: string,
    addTodoHandler: AddTodoHandlerType
}

const AddTodoForm: React.FC<IAddTodoForm> = ({ className, addTodoHandler }) => {
    const {register, errors, handleSubmit, reset} = useForm()

    const onSubmit = (data: any) => {
        reset()
        addTodoHandler({
            ...data,
            complete: false
        })
    }

    return (
        <StyledContainer className="StyledContainer">
            <form className={className} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    required
                    name="title"
                    label="Title"
                    variant="outlined"
                    inputRef={register({required: true})}
                />
                <TextField
                    required
                    multiline
                    rows={3}
                    name="text"
                    label="Text"
                    variant="outlined"
                    inputRef={register({required: true})}
                />
                <Button className="Button" variant="contained" color="primary" type="submit">add todo</Button>
            </form>
        </StyledContainer>
    )
}

export default AddTodoForm