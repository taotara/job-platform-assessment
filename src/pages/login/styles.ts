import React from 'react';
import styled from 'styled-components';
import Elipse from "../../assets/Ellipse.png"


export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (min-width: 1024px) {
        width: 60%;
        margin: 10% auto;
        flex-direction: row;
    }
`

export const Left = styled.div`
    position: 2;
    @media screen and (min-width: 1024px) {
        flex: 2;
    }
    
`

export const Right = styled.div`
    padding: 20px;
    position: 1;
    @media screen and (min-width: 1024px) {
        flex: 2;
    }
`

export const BlueSkew = styled.div`
    visibility: hidden;
    opacity: 0;

    @media screen and (min-width: 1024px) {
        background-color: #0F4A7B;
        padding: 25px 30px;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        visibility: visible;
        opacity: 1;

        &::before{
            content: "";
            position: absolute;
            display: block;
            width: 15%;
            height: 100%;
            top: 0;
            right: 5px;
            z-index: 2;
            background-color: #0F4A7B;
            transform-origin: bottom right;
            -ms-transform: skew(-7deg, 0deg);
            -webkit-transform: skew(-7deg, 0deg);
            transform: skew(-7deg, 0deg);
        }

        &::after{
            content: "";
            position: absolute;
            display: block;
            width: 15%;
            height: 100%;
            top: 0;
            right: 0px;
            z-index: 1;
            background-color: #F57D7D;
            transform-origin: bottom right;
            -ms-transform: skew(-10deg, 0deg);
            -webkit-transform: skew(-10deg, 0deg);
            transform: skew(-10deg, 0deg);
        }
    }
`

export const Logo = styled.img`
    width: 100px;
`
export const LoginCardTxt = styled.p`
    visibility: hidden;
    opacity: 0;

    @media screen and (min-width: 1024px) {
        visibility: visible;
        opacity: 1;
        font-weight: 800;
        font-size: 2rem;
        color: white;
    }
`
export const LoginCardImg = styled.img`
    width: 250px;
    padding-bottom: 5px;
`

export const Rings = styled.div`
    width: 100%;
    height: 300px;
    background-image: url(${Elipse});
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 50px;
    padding: 50px 30px
`

export const LoginTitle = styled.h2`
    font-weight: 800;
    font-size: 1.5rem;
    color: #0F4A7B;
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
`

export const Label = styled.label`
    font-size: 1.1rem;
    font-weight: 400;
    color: #0F4A7B;
    margin-bottom: 0.5rem;
`

export const Input = styled.input`
    height: 46px;
    border: solid 0.5px #0F4A7B;
    border-radius: 10px;
    padding: 5px 10px;
`
export const Button = styled.button`
    background-color: #0F4A7B;
    color: white;
    font-weight: 800;
    font-size: 1.1rem;
    padding: 10px 25px;
    border: none;
    border-radius: 10px;
`