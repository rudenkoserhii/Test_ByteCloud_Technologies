export const formula = {
    backblaze: {
        min: 7,
        max: null,
        storage: 0.005,
        transfer: 0.01,
        color: 'red',
    },
    bunny: {
        min: null,
        max: 10,
        storage: [{'hdd': [0, 0.01]}, {'ssd': [0, 0.02]}],
        transfer: [{'hdd': [0, 0.01]}, {'ssd': [0, 0.01]}],
        color: 'orange',
    },
    scaleway: {
        min: null,
        max: null,
        storage: [{'multi': [75, 0.06]}, {'single': [75, 0.03]}],
        transfer: [{'multi': [75, 0.02]}, {'single': [75, 0.02]}],
        color: 'violet',
    },
    vultr: {
        min: 5,
        max: null,
        storage: 0.01,
        transfer: 0.01,
        color: 'blue',
    }
};

