import Nav from "./Nav";
import NavItem from "./NavItem";
import List from "./List";
import ListItem from "./ListItem";

export default function Recipes({ recipes }) {
  return (
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
          <ListItem key={recipe.id} recipe={recipe} />
        ))}
      </List>
    </div>
  );
}
