import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import postss from "@/store/data/postFile.json";
import savedPosts from "@/store/data/SavedPosts.json";
import Header from "@/HomeComponents/Header";
import Login from "@/HomeComponents/HeaderComponents/AccessBoard";
import { SavePost, unSavePost } from "@/store/functions/singlePostFunctions";

export default function SinglePost() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [post, setPost] = useState(0);
  const router = useRouter();

  const idParams = router.query.PostId;

  useEffect(() => {
    postss.forEach((post) => {
      post.id === idParams ? setPost(post) : null;
    });
    savedPosts.forEach((post) => {
      if (post.id === idParams) {
        setIsSaved(true);
      }
      console.log(idParams);
      console.log(post);
    });
  }, []);
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Login />
      <div tabindex="0" class="menu">
        <div class="menu-dropdown">
          {isSaved ? (
            <a
              href="javascript:void(0)"
              onClick={() => unSavePost(idParams, setIsSaved)}
            >
              Remove
            </a>
          ) : (
            <a
              href="javascript:void(0)"
              onClick={() => SavePost(idParams, setIsSaved)}
            >
              Save Post
            </a>
          )}
        </div>
      </div>

      <section id="single-post">
        <div className="post-container">
          <h1>{post.title}</h1>
          <h3>{post.summary}</h3>
          <p>
            {" "}
            <a>By Hedwig Potter</a>{" "}
            <time suppressHydrationWarning>
              {format(new Date(), "MMM d, yyy HH:mm")}
            </time>
          </p>
          <img src={post.image} />
          <p>
            1914 translation by H. Rackham "But I must explain to you how all
            this mistaken idea of denouncing pleasure and praising pain was born
            and I will give you a complete account of the system, and expound
            the actual teachings of the great explorer of the truth, the
            master-builder of human happiness. No one rejects, dislikes, or
            avoids pleasure itself, because it is pleasure, but because those
            who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone
            who loves or pursues or desires to obtain pain of itself, because it
            is pain, but because occasionally circumstances occur in which toil
            and pain can procure him some great pleasure. To take a trivial
            example, which of us ever undertakes laborious physical exercise,
            except to obtain some advantage from it? But who has any right to
            find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no
            resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et
            Malorum", written by Cicero in 45 BC "At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat." 1914 translation by H. Rackham "On the other
            hand, we denounce with righteous indignation and dislike men who are
            so beguiled and demoralized by the charms of pleasure of the moment,
            so blinded by desire, that they cannot foresee the pain and trouble
            that are bound to ensue; and equal blame belongs to those who fail
            in their duty through weakness of will, which is the same as saying
            through shrinking from toil and pain. These cases are perfectly
            simple and easy to distinguish. In a free hour, when our power of
            choice is untrammelled and when nothing prevents our being able to
            do what we like best, every pleasure is to be welcomed and every
            pain avoided. But in certain circumstances and owing to the claims
            of duty or the obligations of business it will frequently occur that
            pleasures have to be repudiated and annoyances accepted. The wise
            man therefore always holds in these matters to this principle of
            selection: he rejects pleasures to secure other greater pleasures,
            or else he endures pains to avoid worse pains."
          </p>
        </div>
      </section>
    </>
  );
}
