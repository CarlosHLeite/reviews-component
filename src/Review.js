import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviewData from './data'
import { useState } from 'react';



function Review() {

    const [index, setIndex] = useState(0)
    const { name, job, image, text } = reviewData[index];

    const checkNumber = (num) => {
        if(num > reviewData.length - 1){
            return 0
        }

        if(num < 0) {
            return reviewData.length - 1;
        }

        return num
    }

    const nextPreson = () => {
        setIndex( index => {
            let num = index + 1;
            return checkNumber(num)
        })
    } 

    const prevPerson = () => {
        setIndex( index => {
            let num = index - 1;
            return checkNumber(num)
        })
    }

  return (
    <Container>
        <Wrapper>
            <img src={image}/>
            <h3>{name}</h3>
        </Wrapper>

        <BottomSection >
            <button onClick={prevPerson}>
                <FaChevronLeft />
            </button>
            
            <button onClick={nextPreson}>
                <FaChevronRight />
            </button>
        </BottomSection>
       
    </Container>
  )
}



const Container = styled.article`
    width: 350px;
    padding: 30px;
    background-color: #ffffff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
`

const Wrapper = styled.header`

    h3 {
        margin: 8px 0;
    }
    img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;  
    }

`

const BottomSection = styled.section`
    display: flex;
    gap: 35px;
    margin-top: 10px;

    button {
        background-color: #e2f2f8;
        border: none;
        padding: 10px 14px;
        cursor: pointer;
        border-radius: 4px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        transition: all .5s ease;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
        }
    }
`

export default Review