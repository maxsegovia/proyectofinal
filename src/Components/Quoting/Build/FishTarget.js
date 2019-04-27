import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const fishTargetSource = {
    drop(props, monitor, component) {
        return props.handleTargetDrop(props.id);
    }
};

function collect (connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
}

class FishTarget extends Component {
    render() {
        const { connectDropTarget, hovered, item } = this.props;
        const backgroundColor = hovered ? 'lightblue' : 'rgba(0,0,0,0.0001)';

        return connectDropTarget (
            <div className="fish-target" style={{ background: backgroundColor }}>
                {this.props.children}
            </div>
        );
    }
}

export default DropTarget('fish', fishTargetSource, collect) (FishTarget);
