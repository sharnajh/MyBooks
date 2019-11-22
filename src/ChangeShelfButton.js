import React, { Component } from 'react';
import serializeForm from 'form-serialize';

class ChangeShelfButton extends Component {
    state = {
        bookToMove: {
            book: {},
            shelf: ""
        }
    }
    moveShelf = (e) => {
        e.preventDefault()
        this.setState({ bookToMove: { book: this.props.book, shelf: e.value}})
        const values = serializeForm(e.target, { hash: true })
        values.book = this.props.book
        this.props.onMove(values)
    }
    render() {
        const { book, shelves } = this.props
        return (
            <form onSubmit={this.moveShelf}> 
                    <select name="shelf">
                    {shelves.map((shelf,id) => (
                        <option 
                            key={id}
                            value={book.shelf}
                            selected={book.shelf === shelf.value ? true : false}
                        >{shelf.title}</option>
                    ))}
                    </select>
                    <button>Move Shelf</button>
            </form>
        )
    }
}

export default ChangeShelfButton