interface JobInterface {
    name: string,
    id: string,
    description: string,
    requirements: string,
}

interface ParamInterface {
    params: {
        id: number,
    },
}

export type { JobInterface, ParamInterface };