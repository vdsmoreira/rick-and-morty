import { Header } from '../../Components/Header/Header';
import Card from '../../Components/Card/Card';
import { HomePageContainer } from './style';

export function Homepage () {
  return (
    <>
      <HomePageContainer>
        <Header/>

        <main>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </main>
      </HomePageContainer>
    </>
  )
}