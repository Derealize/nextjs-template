import Nav from "./Nav";
import NavItem from "./NavItem";
import List from "./List";
import ListItem from "./ListItem";

const recipes = [
  {
    title: "Hank’s Juiciest Beef Burger",
    rating: 4.94,
    time: 20,
    difficulty: "Easy",
    servings: 4,
    author: "Hank Douglas",
    image: "/jucy-beef-burger.jpg",
  },
  {
    title: "Southern Fried Chicken Sandwich",
    rating: 4.94,
    time: 30,
    difficulty: "Intermediate",
    servings: 4,
    author: "Nicholas Denver",
    image: "/chicken-sandwich.jpg",
  },
  {
    title: "Lily’s Healthy Beef Burger",
    rating: 4.94,
    time: 20,
    difficulty: "Easy",
    servings: 6,
    author: "Lily Ford",
    image: "/healthy-beef-burger.jpg",
  },
];

export default function Recipes() {
  return (
    <div className="ground">
      <div className="divide-y divide-gray-100">
        <Nav>
          <NavItem href="/featured" isActive>
            Featured
          </NavItem>
          <NavItem href="/popular">Popular</NavItem>
          <NavItem href="/recent">Recent</NavItem>
        </Nav>
        <List>
          {recipes.map((recipe) => (
            <ListItem key={recipe.title} recipe={recipe} />
          ))}
        </List>
      </div>
    </div>
  );
}
