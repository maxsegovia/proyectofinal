import React, { Component }from 'react';
import { DragSource } from 'react-dnd';

const fishSource = {
    beginDrag(props) {
        return props.item;
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }
        return props.handleDrop(props.item);
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class Fish extends Component{
    render() {
        const { isDragging, connectDragSource, item } = this.props;
        return connectDragSource(
            <div className="item-product">
                <p className="item-title"><strong>{item.name}</strong></p>
                <div className="row">
                    <div className="col-md-6">
                        <img src={item.image['80x80']} alt={item.name}/>
                    </div>
                    <div className="col-md-6">
                        <p><strong>{item.name}</strong></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DragSource('fish', fishSource, collect)(Fish)
