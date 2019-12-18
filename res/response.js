exports.ok = (res, data) => {
    const response = {
        status: 200,
        response: data
    };
    res.status(200).json(response);
    res.end();
};

exports.notOk = (res, reason, status) => {
    const response = {
        status,
        reason
    };
    res.status(status).json(response);
    res.end();
};