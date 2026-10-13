import { HttpResponse, http } from 'msw'

import { mockOffers } from './data/offers'

// Data returned by the mocked REST API (see public/swagger.yaml).
export const handlers = [
  // GET /api/offers
  http.get('/api/offers', () => HttpResponse.json(mockOffers)),
]
