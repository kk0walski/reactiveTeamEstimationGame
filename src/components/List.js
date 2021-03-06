
import React, { Component } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import CardAdder from './CardAdder';
import Card from './Card';

class InnerList extends Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps === this.props.cards) {
            return false;
        }
        return true;
    }

    render() {
        return this.props.cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} />
        ));
    }
}


export default class List extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.list.id} index={this.props.index} disableInteractiveElementBlocking>
                {(provided) => (
                    <div>
                        <div
                            className="ListContainer"
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                        >
                            <h3 className="listTitle" {...provided.dragHandleProps}>{this.props.list.title}</h3>
                            <Droppable droppableId={this.props.list.id} type="card">
                                {(provided, snapchot) => (
                                    <div>
                                        <div>
                                        <div
                                                className="cardList"
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                isDraggingOver={snapchot.isDraggingOver}
                                            >
                                                <InnerList cards={this.props.cards} />
                                                <CardAdder listId={this.props.list.id} cards={this.props.cards} />
                                            </div>
                                        </div>
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    </div>
                )}
            </Draggable>
        )
    }
}