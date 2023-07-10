import React from "react";
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
return (
    <>
    <div className="home" id="home">
        <main>
        <h1>Home of project</h1>
        <p>This is the first page </p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias
            eos modi doloribus officiis iste eveniet. Error vel impedit atque!
        </p>
        </div>
    </div>

    <div className="home3" id="about">
        <div>
        <h1>Who we are</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            omnis aut, quisquam blanditiis id tempore rerum eveniet sapiente
            dignissimos magni porro eos? Deserunt, dolorum saepe iure nam quasi
            laudantium odit quis quaerat ea rerum commodi dignissimos
            perspiciatis maxime incidunt accusamus quia? Laborum, cupiditate.
            Nesciunt, sapiente qui cupiditate non molestiae veniam consequatur
            iure eum praesentium debitis. Sed nostrum similique blanditiis eos
            quasi laudantium minus quam modi quo labore laborum praesentium,
            quidem molestias fugiat nihil perferendis eum quis incidunt
            voluptatem libero quia. Quidem maiores voluptas aliquam obcaecati
            nemo accusantium quos! Atque culpa illo, vel perspiciatis corrupti
            perferendis. Aperiam architecto cumque consectetur asperiores?
        </p>
        </div>
    </div>

    <div className="home4" id="brands">
        <div>
        <h1>Brands</h1>
        <article>
            <div style={
                {animationDelay:"0.3s"}
            }>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={
                {animationDelay:"0.5s"}
            }>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={
                {animationDelay:"0.7s"}
            }>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={
                {animationDelay:"1s"}
            }>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
        </article>
        </div>
    </div>
    </>
);
};

export default Home;
