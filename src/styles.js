import styled from 'styled-components'

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    display: flex;
    justify-content: center;
    align-items: center;

`

export const ToDoList = styled.div`

    background: #FFFFFF;
    border-radius: 5px;
    padding: 30px 20px;

    ul{
        padding: 0;
    }

`

export const Input = styled.input`

    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    width: 342px;
    height: 40px;
    margin-right: 10px;
    margin-bottom: 40px;

    &::placeholder{
        padding-left: 15px;
        color:#8052EC;
    }

`

export const Button = styled.button`

    background: #8052EC;
    border-radius: 5px;
    color: white;
    width: 130px;
    height: 40px;
    border: none;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    cursor: pointer;
    
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }

`


export const ListItem = styled.div`

    width: 500px;
    height: 60px;
    background: ${props => props.isFinished ? '#E8FF8B': '#E4E4E4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;

    li{
        list-style: none;

        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        
    }

`

export const Trash = styled(FcEmptyTrash)`

    cursor: pointer;

`

export const Check = styled(FcCheckmark)`

    cursor: pointer;

`

export const H3 = styled.h3`

    text-align: center;
    color: #8052EC;

`


