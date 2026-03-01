import { useState } from 'react'
import { Home } from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import { Header } from './Components/HomeComponents/Header'
import { Quotes } from './Pages/Quotes'
import { QuotesProvider } from './Context/QuotesContext'
import { CardActive } from './Pages/CardActive'
import { CardProvider } from './Context/CardActiveContext'
import { SearchProvier } from './Context/SearchContext'
import { Search } from './Pages/Search'
import { FavoritesContext, FavoritesProvider } from './Context/FavoritesContext'
import { Favorites } from './Pages/Favorites'
import { User } from './Pages/User'
import { UserProvider } from './Context/UserContext'
import ExploreHeader from './Components/ExploreComponents.jsx/ExploreHeader'
import ExploreMain from './Components/ExploreComponents.jsx/ExploreMain'
import BiographiesSelect from './Components/ExploreComponents.jsx/BiographiesComponents/BiographiesSelect'
import { BiographieProvider } from './Context/BiographieContext'
import Biographie from './Components/ExploreComponents.jsx/BiographiesComponents/Biographie'
import MainQuizPage from './Components/ExploreComponents.jsx/QuizzesComponents/MainQuizPage'
import { QuizProvider } from './Context/QuizContext'
import Quiz from './Components/ExploreComponents.jsx/QuizzesComponents/Quiz'
import HistoricalMain from './Components/ExploreComponents.jsx/HistoricalEventsComponents/HistoricalMain'
import { HistoricalProvider } from './Context/HistoricalContext'
import HistoricalEvent from './Components/ExploreComponents.jsx/HistoricalEventsComponents/HistoricalEvent'
import MainFrames from './Components/ExploreComponents.jsx/HistoryInFrames/MainFrames'
import GuidePage from './Components/ExploreComponents.jsx/HistoryGuide/GuidePage'
import TipsDisplay from './Components/ExploreComponents.jsx/HistoryGuide/Tips/TipsDisplay'
import BookMain from './Components/ExploreComponents.jsx/HistoryGuide/BookRecommendation/BookMain'
import BookDescription from './Components/ExploreComponents.jsx/HistoryGuide/BookRecommendation/BookDescription'
import { BookProvider } from './Context/BookContext'
import DescriptionMain from './Components/ExploreComponents.jsx/HistoryGuide/BookRecommendation/DescriptionMain'
import MoviesMain from './Components/ExploreComponents.jsx/HistoryGuide/Movie Recommendation/MoviesMain'
import { MovieProvider } from './Context/MovieDescriptionContext'
import MovieDescription from './Components/ExploreComponents.jsx/HistoryGuide/Movie Recommendation/MovieDescription'
import MovieDescriptionMain from './Components/ExploreComponents.jsx/HistoryGuide/Movie Recommendation/MovieDescriptionMain'
import AiMain from './Components/AiComponents/AiMain'
import { AiProvider } from './Context/AiContext'
import Footer from './Components/Footer'
import ScrollToTop from './ScrollToTop'

function App() {

  return(
    <AiProvider>
    <MovieProvider>
    <BookProvider>
    <HistoricalProvider>
    <QuizProvider>
    <BiographieProvider>
    <UserProvider>
    <FavoritesProvider>
  <QuotesProvider>
    <CardProvider>
      <SearchProvier>
        
        <ScrollToTop/>
    <Routes>
       <Route path="/" element={
       <>
        <Home/>
        <Footer/>
        </>
       }/>

       <Route path="/Quotes" element={
        <>
          <Header/>
          <Quotes/>
          <Footer/>
        </>
       }/>

       <Route path="/card/:id" element={
         <>
           <Header/>
           <CardActive/>
           <Footer/>
         </>
       }/>

       <Route path="/search" element={
          <>
        <Search/>
        <Footer/>
        </>
       }/>

       <Route path="/favorites" element={
        <>
         <Favorites/>
         <Footer/>
        </>
       }
       />

       <Route path="/user" element={
        <>
         <User/>
         <Footer/>
        </>
       }/>

       <Route path="/explore" element = {
        <>
            <Header/>
           <ExploreHeader/>
           <ExploreMain/>
           <Footer/>
        </>
       }/>

       <Route path="/biographies" element={
        <>
          <Header/>
          <ExploreHeader/>
          <BiographiesSelect/>
          <Footer/>
        </>
       }/>

       <Route path="/biographie/:id" element={
        <>
          <Header/>
          <ExploreHeader/>
          <Biographie/>
          <Footer/>
        </>
       }/>

       <Route path="/quizzes" element={
        <>
          <Header/>
          <ExploreHeader/>
          <MainQuizPage/>
          <Footer/>
        </>
       }/>


       <Route path="/playQuiz" element={
        <>
          <Header/>
          <ExploreHeader/>
           <Quiz/>
           <Footer/>
        </>
       }/>

       <Route path='/historicalEvents' element={

        <>
          <Header/>
          <ExploreHeader/>
          <HistoricalMain/>
          <Footer/>
        </>
       }/>

       <Route path="/event/:id" element={
         <>
            <Header/>
            <ExploreHeader/>
            <HistoricalEvent/>
            <Footer/>
         </>

       }/>

       <Route path="/frames" element={
        <>
          <Header/>
          <ExploreHeader/>
          <MainFrames/>
          <Footer/>
        </>
       }/>

       <Route path='/guide' element={
        <>
          <Header/>
          <ExploreHeader/>
          <GuidePage/>
          <Footer/>
        </>
       }/>

       <Route path='/learningTips' element={
        <>
          <Header/>
          <ExploreHeader/>
          <TipsDisplay/>
          <Footer/>
        </>
       }/>

       <Route path="/books" element={
        <>
          <Header/>
          <ExploreHeader/>
          <BookMain/>
          <Footer/>
        </>
       }/>

       <Route path="/bookDescription" element={
        <>
          <Header/>
          <ExploreHeader/>
          <DescriptionMain/>
          <Footer/>
        </>
       }/>

       <Route path="/movies" element={
        <>
         <Header/>
         <ExploreHeader/>
         <MoviesMain/>
         <Footer/>

        </>
       }/>

       <Route path="/movieDescription" element={
        <>
          <Header/>
          <ExploreHeader/>
          <MovieDescriptionMain/>
          <Footer/>
        </>
       }/>

       <Route path="/AI" element={

         <>
           <Header/>
           <AiMain/>
           <Footer/>
         </>
       }/>
     </Routes>
    </SearchProvier>
    </CardProvider>
    </QuotesProvider>
    </FavoritesProvider>
    </UserProvider>
    </BiographieProvider>
    </QuizProvider>
    </HistoricalProvider>
    </BookProvider>
    </MovieProvider>
    </AiProvider>
  )

}

export default App
