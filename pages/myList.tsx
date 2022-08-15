import Head from "next/head";
import React from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SavedList from "../components/SavedList";
import useAuth from "../hooks/useAuth";
import useList from "../hooks/useList";
import Modal from "./../components/Modal";

function myList() {
  const { user } = useAuth();
  const showModal = useRecoilValue(modalState);
  const list = useList(user?.uid);

  return (
    <div
      className={`relative h-screen bg-gradient-to-b  ${
        showModal && "!h-screen overflow-hidden"
      }`}>
      <Head>
        <meta name='description' content='This is the my List page' />
        <title>My List</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <Header />

      <main className='relative px-2 lg:px-12 py-24 h-fit 2xl:h-screen'>
        <SavedList movies={list} />
      </main>

      {/* Modal */}
      {showModal && <Modal />}
      <Footer />
    </div>
  );
}

export default myList;
