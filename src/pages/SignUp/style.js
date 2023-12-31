import styled from "styled-components"
import img from "../../assets/img.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 136px;

  .sign {
  width: 100%;
  margin-bottom: 42px;
}

> div {

  >h1 {
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 48px;
  font-weight: 700;
}

 >p{
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 14px;
}

> h2 {
  margin: 48px 0;
  font-size: 24px;
  font-weight: 500;
}

}

>a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.COLORS.PINK};
  text-decoration: none;
}

`

export const Background = styled.div`
  background: url(${img}) no-repeat center center;
  background-size: cover;
  flex: 1;
`