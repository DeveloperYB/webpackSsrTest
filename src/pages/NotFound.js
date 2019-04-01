import React from 'react';

const NotFound = ({ location }) => {
    return (
        <div>
            404 ERROR : Not Found Page
            <br />
            현재 "{location.pathname}" Path의 페이지를 찾을 수 없습니다.
        </div>
    );
};

export default NotFound;
