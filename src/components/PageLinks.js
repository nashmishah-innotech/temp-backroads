import { dataLinks } from "../data.js";

const PageLinks = ({ parent, children, id }) => {
  return (
    <ul className={parent} id={id}>
      {dataLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={children}>
              {link.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;
