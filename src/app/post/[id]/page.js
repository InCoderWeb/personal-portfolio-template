"use client";
import React from "react";
import Card from "@/app/components/Card/page";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
} from "react-share";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const socialShareOptions = [
  {
    btn: (
      <FacebookShareButton
        url="https://www.youtube.com/watch?v=9WzIACv_mxs"
        className="shareBtn"
        title="Facebook"
      >
        <FacebookIcon size={30} round={true} />
      </FacebookShareButton>
    ),
  },
  {
    btn: (
      <WhatsappShareButton url="/" className="shareBtn" title="Whatsapp">
        <WhatsappIcon size={30} round={true} />
      </WhatsappShareButton>
    ),
  },
  {
    btn: (
      <TelegramShareButton url="/" className="shareBtn" title="Telegram">
        <TelegramIcon size={30} round={true} />
      </TelegramShareButton>
    ),
  },
  {
    btn: (
      <TwitterShareButton url="/" className="shareBtn" title="Twitter">
        <TwitterIcon size={30} round={true} />
      </TwitterShareButton>
    ),
  },
  {
    btn: (
      <RedditShareButton url="/" className="shareBtn" title="Reddit">
        <RedditIcon size={30} round={true} />
      </RedditShareButton>
    ),
  },
  {
    btn: (
      <LinkedinShareButton url="/" className="shareBtn" title="Linkedin">
        <LinkedinIcon size={30} round={true} />
      </LinkedinShareButton>
    ),
  },
  {
    btn: (
      <TumblrShareButton url="/" className="shareBtn" title="Tumblr">
        <TumblrIcon size={30} round={true} />
      </TumblrShareButton>
    ),
  },
  {
    btn: (
      <EmailShareButton url="/" className="shareBtn" title="Email">
        <EmailIcon size={30} round={true} />
      </EmailShareButton>
    ),
  },
];

const Page = ({ params }) => {
  return (
    <>
      <div className="postSection">
        <div className="title">This is a sample post title for example.</div>
        <div className="createdAt">01 June 2021</div>
        <div className="postTags">
          <div className="chip">HTML</div>
          <div className="chip">CSS</div>
          <div className="chip">JavaScript</div>
          <div className="chip">Tailwind</div>
        </div>
        <div className="postImage">
          <img src="https://i.pinimg.com/originals/a5/45/38/a54538be5aa14b5af9b6446aa5fd2f7a.jpg" alt="Post Image" />
        </div>
        <div className="postContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          architecto consequuntur totam laboriosam omnis aspernatur saepe est
          numquam, alias animi, asperiores reprehenderit explicabo in dicta
          dolor? Soluta adipisci veniam dicta reiciendis, ipsam, itaque
          repellendus accusamus ad facilis, explicabo maxime esse voluptas
          expedita recusandae neque tempore dolorem id laborum veritatis
          molestiae atque deleniti at temporibus? Sit fugiat assumenda commodi
          exercitationem. Provident, id neque labore dignissimos repudiandae
          nihil odio officia. Dolore ipsam molestias, neque praesentium iste
          deleniti, ipsa amet ea, fugiat ullam magni quae adipisci hic deserunt
          nulla! Aperiam iusto magni consequuntur dignissimos incidunt et
          delectus omnis unde, ab tenetur voluptatum dolores quae deleniti est
          nulla eligendi enim rerum alias repellat. Optio saepe architecto
          dignissimos sed recusandae eaque debitis id itaque tempore ipsam
          quibusdam consequuntur veritatis laudantium fugit provident deleniti
          asperiores odio voluptatibus, ex totam. Sequi, dolorem doloribus.
          Numquam ut odit inventore delectus voluptate magni, itaque assumenda
          velit quo laborum quibusdam aperiam adipisci sint ab tempora fuga
          temporibus sit reiciendis quas cupiditate! Necessitatibus architecto,
          maxime non quibusdam ab consectetur alias, dicta voluptatibus
          consequuntur distinctio, sequi velit beatae! Deserunt est perferendis,
          inventore nemo dolore quis unde vel dolorem consequatur id ea eius?
          Nobis molestias iure similique temporibus sapiente beatae mollitia!
          Fugit dolor enim mollitia ducimus, quam nihil? Adipisci magnam omnis
          facere id nesciunt. Impedit, esse culpa accusamus pariatur earum ipsum
          iure recusandae facere ratione dolores itaque delectus eius sapiente
          incidunt, totam, voluptatum maxime fugiat ipsam atque veniam quae!
          Quae quibusdam, assumenda similique quos quia sed quo, nihil, ipsum
          sunt quam culpa. Impedit, sed veritatis! Incidunt est voluptas quia
          odit! Voluptatibus unde impedit ad magni nobis itaque aut ea,
          reprehenderit recusandae dicta aliquam voluptas esse tempore quos nam
          quae est nihil possimus amet rem porro corporis sed distinctio a!
          Eveniet cumque quis magni soluta, officiis dolore. Voluptatem itaque
          consequatur error ea, corporis adipisci placeat enim quas modi facere
          blanditiis velit nostrum obcaecati, accusamus suscipit laboriosam
          earum asperiores fuga quibusdam pariatur vero, aperiam dolorum ab.
          Ratione, magni. Amet quaerat aut velit explicabo odit aperiam
          recusandae unde ab maiores nostrum esse dolore, magnam officia cum rem
          eum eveniet voluptates voluptate delectus. Magnam consequatur fugiat,
          magni expedita sunt minus tenetur sed exercitationem labore, quas odio
          illo beatae laborum recusandae nobis, dolore molestias saepe cum nam!
          Voluptates dolorum recusandae ex! Consequatur neque ullam vero nihil
          ex libero, eum placeat ea iste iure dolore odio modi sapiente autem
          perspiciatis sint recusandae eveniet rerum ut culpa nemo eos nobis,
          maiores voluptatem. Repudiandae eligendi vero architecto ratione,
          exercitationem, et ipsum inventore tenetur vel quas modi qui tempora
          temporibus quaerat repellendus in facere harum iusto dolores? Fugit
          rerum, reprehenderit odio ea voluptate magni, iure eum pariatur ad
          tempore ullam ratione quia? Deleniti magnam esse ipsam nemo voluptate
          rem, fugiat velit maiores quasi perspiciatis aspernatur laudantium
          autem expedita repellendus sunt id laborum tenetur qui provident
          distinctio consequatur cupiditate minima eum corporis! Nisi voluptates
          ipsum, dolorum cum nihil magnam consectetur eveniet placeat magni
          harum labore enim aperiam nam inventore aliquam non ullam, dolores
          voluptatem porro. Nisi atque numquam sequi reprehenderit quis
          inventore laboriosam doloribus!
        </div>
        <div className="shareIcon">
          <p>Share this post</p>
          <div className="wrapper">
            {socialShareOptions.map((option, index) => (
              <div key={index}>{option.btn}</div>
            ))}
          </div>
        </div>
        <div className="relatedPost">
          <p>You Might Like these:</p>
          <div className="postWrapper">
            <Card type={"post"} postURL={"/#"} />
            <Card type={"post"} postURL={"/#"} />
            <Card type={"post"} postURL={"/#"} />
          </div>
          <hr />
        </div>
        <div className="nxtPrevBtns">
          <button className="prevBtn"><FaArrowLeft/>&nbsp;Prev Post</button>
          <button className="nextBtn">Next Post&nbsp;<FaArrowRight/></button>
        </div>
      </div>
    </>
  );
};

export default Page;
