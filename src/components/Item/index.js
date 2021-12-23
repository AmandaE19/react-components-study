function Item(props, {link}) {
    return (
      <div className="Item">
        <header className="Item-header">
            <a href="https://github.com/AmandaE19/" target="_blank" class="list-group-item list-group-item-action list-group-item-dark">
              {props.texto}
            </a>
        </header>
      </div>
    );
  }
  
  export default Item;
  