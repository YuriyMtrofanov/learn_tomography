export default function paginate(data, index) {
    return [...data].splice(0, index);
};
