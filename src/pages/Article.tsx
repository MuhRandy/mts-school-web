import { IconCalendarStats, IconUserCircle } from "@tabler/icons-react";
import Content from "../components/Content";

function Article() {
  const date = new Date();

  const days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ags",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];

  return (
    <div>
      <Content>
        <Content.Main>
          <div className="p-2">
            <img
              src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80"
              alt=""
              className="w-full"
            />
            <h1 className="text-4xl font-bold my-3">Judul</h1>
            <div className="py-5 mb-7 flex items-center justify-between border-b-2 border-black">
              <div className="flex gap-2 items-center">
                <IconUserCircle
                  size={35}
                  className="hover:scale-125 transition duration-500"
                />
                <span className="font-semibold">@Admin</span>
              </div>
              <div className="flex items-center gap-1">
                <IconCalendarStats size={20} stroke={1} />
                <span className="font-semibold">
                  {day}, {date.getDate()} {month} {date.getFullYear()}
                </span>
              </div>
            </div>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias, laboriosam enim, delectus soluta dolore, perferendis
              aspernatur veritatis facilis consequuntur consectetur veniam
              adipisci id! Nihil earum cumque omnis eaque minus sapiente, sequi
              at placeat totam voluptatibus quibusdam. Ipsam veniam magnam nihil
              consequatur hic cupiditate est deleniti, sapiente, iusto
              repellendus illum ipsum asperiores odio corrupti aliquid sint
              dicta tenetur ex laudantium! Deleniti officiis quos quis natus. In
              ducimus facilis distinctio dolores, laudantium quasi accusantium
              qui consectetur sit tempora cumque voluptatem eum officia omnis
              dolor provident excepturi animi adipisci? Totam ullam nemo quia
              laudantium officiis illum vitae culpa error voluptatum minima ab,
              fuga consequuntur, laborum voluptas veritatis nulla adipisci
              incidunt corporis ratione suscipit. Delectus esse tempore rerum,
              harum veritatis dignissimos facilis maxime quasi assumenda
              inventore doloremque optio? Natus a dolore nostrum dolorem labore
              cumque, doloremque ut expedita quae, nisi pariatur deserunt
              aperiam ex. Deserunt, culpa ratione inventore facere minus quae
              quis eos nemo exercitationem ex blanditiis ea, adipisci
              perspiciatis omnis repellat illo provident, nesciunt labore dolor
              accusamus tempora alias est? Sapiente tempora, voluptatem minima
              maiores praesentium vitae error odio hic iste aut quam officia
              recusandae accusantium. At, illum deserunt praesentium nesciunt
              temporibus id illo est itaque rem, hic repudiandae esse pariatur
              corporis laudantium earum quisquam magni doloribus perferendis sit
              mollitia alias tenetur! Labore accusamus reiciendis quisquam
              eligendi, odio quod exercitationem, similique corporis provident
              officiis omnis nam praesentium fuga porro debitis totam cum optio
              doloribus! Nihil dolor distinctio maxime illum? Expedita
              aspernatur debitis recusandae, adipisci placeat molestias harum
              fugiat aperiam id iste, voluptatibus quasi tempora dolore
              asperiores nemo necessitatibus laborum excepturi soluta dolorum
              quas modi accusantium? Praesentium veritatis doloribus dignissimos
              suscipit. Nostrum nisi quam vitae ab harum provident voluptas
              reprehenderit officia. Similique debitis aspernatur qui quos
              mollitia praesentium accusamus tenetur laboriosam. Beatae expedita
              est incidunt magnam. Ut obcaecati, dolorum doloremque, quas
              adipisci quam aliquid nisi quasi non dolor asperiores, sunt qui
              reprehenderit? Officiis voluptatem aspernatur similique et id unde
              enim distinctio libero vero, fugit voluptate rerum mollitia iure
              nihil commodi soluta quos nam sint quibusdam! Explicabo quod nulla
              ad tempore necessitatibus in quasi, temporibus quia sit iure saepe
              reprehenderit voluptate libero veritatis maiores ducimus provident
              voluptatibus cum veniam aliquid magni! Deleniti alias harum omnis,
              voluptatum laborum repellat id praesentium aut at facere, vitae
              quas provident fuga quia exercitationem aliquid consequuntur!
              Cupiditate dolor ipsam obcaecati incidunt corrupti? Excepturi
              inventore possimus accusantium reiciendis laborum porro
              consectetur earum quos esse, ut, ab aperiam deserunt minus
              voluptates soluta incidunt dignissimos repellendus. A recusandae
              architecto repellat autem. Sapiente debitis sequi recusandae,
              quisquam, ad similique pariatur dolorum fugiat nulla illum
              consequuntur cupiditate id quod quaerat rem maiores sed ducimus
              necessitatibus dolor molestias blanditiis veniam animi quibusdam?
              Explicabo autem dolore accusamus ad cum ex nihil doloribus iste
              doloremque quod, aperiam et, mollitia enim fugiat nobis voluptatem
              aliquid dicta nisi molestiae possimus! Beatae pariatur iure totam
              sunt natus officiis ullam quaerat dicta quas quidem laudantium est
              cum veniam saepe nihil eveniet earum temporibus sapiente deleniti
              explicabo in, dolores laboriosam, impedit repudiandae!
              Necessitatibus tempore rerum, dolorum illum explicabo praesentium
              nemo sit eligendi fugiat eum quod repudiandae earum ratione ipsam
              soluta similique quidem assumenda. Officiis architecto sequi ea
              minus, voluptates cumque accusantium consequuntur accusamus,
              eaque, tempora dolorem necessitatibus! In molestiae eum dolore
              deserunt quidem sapiente unde possimus sint at aliquam explicabo
              culpa non repudiandae repellendus fugit praesentium est
              perferendis perspiciatis ad, laborum nesciunt natus expedita? Cum
              dolores recusandae eius, veniam beatae at, unde ex debitis,
              dolorum ipsum quisquam! Ratione earum officiis perspiciatis
              eligendi perferendis aut nihil. Nulla molestiae quo voluptate
              laboriosam id commodi adipisci quae aspernatur beatae, temporibus
              voluptatum totam veritatis maiores dolores iusto quod dignissimos
              quia dicta eligendi dolore accusamus quisquam magnam sed. Itaque
              temporibus optio, nemo quos sequi perspiciatis adipisci inventore
              fugit omnis dolores? Maiores nemo debitis recusandae praesentium!
              Aut veritatis asperiores veniam corporis nam. Excepturi sapiente
              sequi laudantium vitae reiciendis repellat. Blanditiis fugit
              reiciendis maiores, temporibus amet debitis voluptate suscipit
              nisi unde laudantium, inventore incidunt explicabo ipsa quidem
              vitae non porro excepturi cumque dolore veniam nesciunt repellat,
              consequuntur nobis. Temporibus eius, voluptatum vero fugiat
              officia, commodi architecto aut odit unde, animi excepturi quis
              dolorum in sint labore quidem veritatis culpa esse laudantium
              obcaecati veniam qui. Exercitationem voluptatibus dolor suscipit
              magni sint qui corporis, ad, perferendis accusantium fugiat odit
              aliquam adipisci, ab cumque eos eum maiores! Dignissimos at
              cupiditate minus, delectus veniam blanditiis reprehenderit. Optio
              nobis eum impedit sed cumque. Quis, quae natus. Deserunt dolor
              debitis quasi enim atque voluptate, tenetur culpa distinctio
              libero cum! Molestias enim sequi dolores facilis assumenda vero
              dicta maiores, facere, perspiciatis voluptatum mollitia repellat
              ipsum adipisci quibusdam! Harum reiciendis quod ducimus in nobis,
              culpa sunt distinctio. Dolorem consequatur ab voluptatem eaque
              consectetur repellat molestiae maxime, et ad repellendus
              distinctio a numquam veritatis similique perferendis architecto
              reprehenderit. Soluta nostrum perspiciatis corrupti accusantium
              obcaecati cumque voluptates pariatur sint fugit? Illo soluta amet
              perspiciatis libero et vero non corporis, provident recusandae
              assumenda? Dicta quas autem doloremque quibusdam quos optio
              eveniet tempora aspernatur obcaecati voluptas mollitia quae,
              reprehenderit ipsa et quia molestiae sint nisi minima cum quam
              labore illo laborum? Modi optio error ullam iure possimus,
              delectus assumenda id labore earum perspiciatis ducimus ad, culpa
              ab illum amet rerum omnis voluptate? Dolore voluptatum eius
              provident aliquid facilis voluptas et facere enim, quaerat ipsam
              nihil eveniet asperiores consectetur! Minima pariatur nostrum
              accusantium veniam, maxime unde eum expedita ipsa non magni
              reprehenderit deserunt animi, optio corrupti commodi laboriosam
              sunt enim, provident voluptate quos exercitationem eaque! Facilis
              earum quia repellat quae, similique incidunt. Facere ipsam natus
              inventore doloremque culpa, animi commodi eius fugiat, iusto
              corporis maiores dolor porro, asperiores error pariatur nobis
              nihil corrupti blanditiis suscipit? Quidem, numquam. Ab natus quas
              in, doloremque sunt et minima quia harum nam deserunt animi
              aperiam aut. Fugit sit minima tenetur facilis repudiandae,
              accusantium impedit voluptates. Aperiam perspiciatis voluptas
              dolores, placeat fuga illo libero minima asperiores non voluptates
              dicta culpa quia aut nulla necessitatibus harum natus sunt.
              Soluta, rem. Tempore culpa dolorem delectus, enim laboriosam nihil
              voluptate temporibus ullam nostrum dolore natus quasi quo nisi
              commodi. Cum porro delectus rem reiciendis error provident?
              Laboriosam ducimus voluptates sed inventore totam, cupiditate
              accusantium eos excepturi eligendi? Iure culpa, assumenda nisi
              possimus maxime mollitia recusandae hic voluptas atque dicta sunt
              ad quo iste tempora numquam molestias suscipit, omnis officia.
              Quo, asperiores mollitia. Doloribus tenetur dolore adipisci
              eligendi suscipit perspiciatis nesciunt repellat tempora. Corporis
              aliquid at quia omnis. Iure adipisci illo quae dignissimos nostrum
              maiores necessitatibus? Consequatur ipsa fugit mollitia vero
              consequuntur voluptatem maiores repudiandae reiciendis dolores
              necessitatibus nesciunt vitae, alias ut accusantium eos
              consectetur optio? Enim corporis ad laudantium facilis, nulla quo
              placeat iste molestiae praesentium at aliquid, eius voluptatibus
              itaque magni ipsum officia nobis nemo suscipit porro! Quae neque
              aspernatur adipisci ut voluptatibus alias? Molestiae error eaque
              veniam magnam, quo sapiente. Eius iusto quidem id odit mollitia
              minima in impedit sequi, quo corrupti velit dolores earum facilis
              architecto ut explicabo provident vitae harum laborum, labore
              quod! Aspernatur, dolorem deserunt corporis magnam debitis
              blanditiis? Vero molestias pariatur odio. Fugit rem voluptate
              doloremque architecto beatae explicabo ullam ducimus nesciunt!
              Quam reprehenderit molestiae eum voluptatibus corporis debitis
              autem ea, ullam accusamus libero? Dolorum numquam neque nobis
              porro illo, odit nisi dicta voluptatem sequi doloribus nulla
              consequatur. Animi voluptatibus perspiciatis tempore,
              reprehenderit iure similique voluptatum non amet totam nihil
              voluptas ut ducimus dignissimos temporibus, mollitia eos. Maxime
              eligendi eveniet recusandae error officiis, harum accusantium
              quibusdam eaque itaque consectetur, dolorum earum, nihil
              blanditiis a repellendus natus tempore ab beatae atque? Quibusdam
              enim reprehenderit provident eveniet ad pariatur unde nobis quod
              veniam molestias labore qui, quisquam, modi recusandae consequatur
              laudantium debitis totam! Blanditiis, fuga! Reiciendis laborum
              consectetur impedit inventore. Hic, unde. Quis reiciendis esse,
              vel perspiciatis cumque tenetur dolorum ipsa ex adipisci quibusdam
              iure, autem incidunt voluptates quia! Sunt saepe eum laboriosam
              quidem eveniet consectetur, porro sapiente velit vel quo totam
              blanditiis placeat repellendus adipisci maxime illum repudiandae.
              Harum minima est fugit id cupiditate omnis fuga sit aperiam
              exercitationem! Nesciunt numquam aliquid debitis, harum modi
              necessitatibus repellat laborum vero voluptas culpa temporibus
              saepe obcaecati soluta alias iste ullam minima dolorem fugit
              eveniet ipsum nostrum, odit doloribus quaerat maxime? Obcaecati
              adipisci nulla non quo, assumenda architecto nemo ducimus. Nam
              nihil iusto, sunt quia nobis molestias impedit? Necessitatibus
              repudiandae expedita quod eum placeat quisquam numquam debitis
              reiciendis corrupti quaerat voluptatum natus mollitia nulla
              similique unde, molestias doloribus ipsa exercitationem earum amet
              dolor repellendus iusto. Consequuntur delectus magni, fugit
              laborum unde tempora temporibus veniam molestiae. Quam suscipit
              enim ex autem illum vel beatae nobis aut repellat voluptas libero
              nihil molestiae, cum aspernatur minima officiis ullam omnis
              repellendus hic numquam at, maiores, magnam nostrum. Voluptatem
              facere perferendis vel dolorem voluptatum ducimus porro
              repudiandae eum cumque numquam nesciunt debitis est blanditiis
              sequi rerum, fugiat nemo sint itaque modi illum veritatis
              consectetur fugit corporis consequatur! Recusandae, numquam harum.
              Et rerum ipsa optio, voluptatem, reiciendis dolorem cum aliquam
              similique praesentium fugit autem nihil itaque ipsam qui? Iusto
              asperiores doloremque rem dolores, inventore aperiam vel quas,
              provident veniam fugiat enim delectus placeat earum alias? Officia
              dolore quia voluptas dolores dolorum provident, veniam nisi eos
              possimus debitis temporibus, fugit itaque! Hic maxime eius qui
              labore dolores animi magnam sapiente ratione quae, officia
              consectetur fugiat perspiciatis cupiditate illo commodi doloribus
              vel porro, quos ex voluptate amet ipsam sint. Voluptate, quasi
              neque nisi quaerat consequuntur assumenda laboriosam dolores. Iure
              eos eius quae consequuntur esse fugit itaque unde nobis, corrupti,
              magnam recusandae veritatis quasi voluptatem harum at earum
              voluptate sunt libero temporibus ipsum adipisci sequi minus?
              Voluptates iure culpa corrupti nesciunt est aut autem, ea, alias
              asperiores sapiente quo laborum voluptatum. Et deleniti suscipit
              reprehenderit itaque officiis ad sed molestias rem labore officia!
              Tenetur nesciunt aliquid eius reiciendis consequatur fugit
              incidunt veniam sed quisquam expedita molestias, cumque labore,
              ratione qui distinctio accusamus? Numquam, corrupti odit? Sequi
              non sed molestias reprehenderit sint nostrum sapiente iste amet
              labore repellat blanditiis ipsam eaque quisquam, optio placeat
              culpa. Perspiciatis dicta voluptate ut similique totam nam autem,
              quasi aliquid iusto? Exercitationem omnis error, dignissimos
              voluptatum adipisci obcaecati nostrum unde iure earum, ab ex! Rem
              dignissimos commodi velit? Cupiditate enim sunt laudantium error
              repellendus aliquid officia, quo, labore optio ipsam consequatur
              obcaecati cum minus fugiat praesentium nobis veritatis illo fuga,
              tempora ut molestiae possimus.
            </p>
          </div>
        </Content.Main>
        <Content.Aside noTitle={true} />
      </Content>
    </div>
  );
}

export default Article;
