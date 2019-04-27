import React, { Component }from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
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

class Plant extends Component{
    render() {
        const { isDragging, connectDragSource, item } = this.props;
        return connectDragSource(
            <div className="item-product">
                <p className="item-title"><strong>{this.props.item.name}</strong></p>
                <div className="row">
                    <div className="col-md-6">
                        <img src={this.props.item.image[0]} alt={this.props.item.name}/>
                    </div>
                    <div className="col-md-6">
                        <p><strong>{this.props.item.name}</strong></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DragSource('item', itemSource, collect)(Plant)
