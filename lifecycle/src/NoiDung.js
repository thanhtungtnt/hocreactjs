import React, { Component } from 'react';

class NoiDung extends Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('-- 1. getDerivedStateFromProps of NoiDung.js run. nextProps = ' + nextProps.status + ' | prevState = ' + prevState);
        console.log(prevState);
        return 1;
    }

    shouldComponentUpdate(){
        console.log('-- 2. shouldComponentUpdate of NoiDung.js run');
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log('-- 4. getSnapshotBeforeUpdate of NoiDung.js run');
        return 0;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('-- 5. componentDidUpdate of NoiDung.js run');
    }

    render() {
        console.log('-- 3. render of NoiDung.js run');
        return (
            <div>
                <h4>Trang thai hien tai la: {this.props.status}</h4>
            </div>
        );
    }
}

export default NoiDung;