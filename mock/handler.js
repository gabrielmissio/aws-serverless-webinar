exports.handler = async (event) => ({
  headers: {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': '*',
    'access-control-allow-headers': '*'
  },
  statusCode: 200,
  body: JSON.stringify({
    data: [{
      profileUrl: 'https://webinar-cloud-s3-buckets-dev-mediabucket-12lsl60bol3mt.s3.amazonaws.com/the-best-of-2022.png',
      name: 'Timothy Johnson',
      email: 'timothy@mail.com',
      id: '9f3b69c1-c2e2-4dd8-8dc6-46528e4b4a4a'
    },
    {
      name: 'Robert Davis',
      email: 'robert@mail.com',
      id: 'bf10f1df-05c2-415e-a60d-23702dd17b15'
    },
    {
      name: 'Jessica Lee',
      email: 'jessica@mail.com',
      id: '1f9687a2-15a8-4b72-b4df-c0e0474e2f88'
    },
    {
      name: 'Peter Lee',
      email: 'peter@mail.com',
      id: '938831f7-f22a-44a5-9903-94f3b7e15261'
    },
    {
      name: 'Megan White',
      email: 'megan@mail.com',
      id: '3aeb9f77-0d7b-4b4e-b4a2-58b7d689350f'
    },
    {
      name: 'Jimmy Johnson',
      email: 'jimmy@mail.com',
      id: 'c3d6b8c6-4615-43a9-b9eb-83f496bbf3d1'
    },
    {
      name: 'Alice Brown',
      email: 'alice@mail.com',
      id: '2f244cbb-bb09-41f9-8d77-d2235dc00e53'
    },
    {
      name: 'Sara Williams',
      email: 'sara@mail.com',
      id: 'de9037e4-4f96-4d10-aa4a-33c5489744b2'
    },
    {
      name: 'David Smith',
      email: 'david@mail.com',
      id: '4919a9f4-4b4e-4d3e-8d2b-83cf6110a889'
    },
    {
      name: 'Bob Brown',
      email: 'bob@mail.com',
      id: '55d1f9cb-2345-48b7-a20b-0088346de729'
    }],
    metadata: {
      next: false
    }
  })
})
