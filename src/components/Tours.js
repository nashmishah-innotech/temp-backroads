import Title from "./Title";
// import Tour from "./Tour";
import Tour2 from "./Tour2";
import { tours } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />
      {/* <Tour /> */}
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour2 key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
