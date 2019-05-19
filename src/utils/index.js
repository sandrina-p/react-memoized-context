export function getDisplayName(prefix, Component) {
    const name = Component.displayName || Component.name || 'Component';

    return `${prefix}(${name})`;
}

export function filterObject(object, filter) {
    if (!object || !filter) {
        return {};
    }

    return filter.reduce((result, key) => {
        return { ...result, [key]: object[key] };
    }, {});
}
