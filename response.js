// Headers - será sempre o mesmo, independente da requisição
const headers = {
  headers: { Authorization: 'cwBZP-2RHQiRpZBqnIsCuCCUgxLPHdGe' },
};

// Compra aprovada Body
const approvedPayemntBody = {
  event_name: 'approved-payment',
  sale_id: 'dca36387-7ec5-4717-a9f0-72acbbf6b37f',
  status: 'paid',
  payment_method: 'card',
  installments: 1,
  card: [{ brand: 'hiper', last_four_digits: '5131' }],
  pix: null,
  billet: null,
  created_at: '2022-09-22T17:58:24.000Z',
  updated_at: '2022-09-22T17:58:24.000Z',
  paid_at: '2022-09-22T17:58:24.000Z',
  product: {
    id: '6566823b-c078-4c00-9c32-dc96998e99fd',
    name: 'Produto Video Único',
  },
  customer: {
    full_name: 'Danilo de Maria1',
    email: 'daniloctg@msn.com',
    whatsapp: '47999116697',
    document_number: '33794500067',
  },
  subscription: null,
};

// Reembolso
const refundBody = {
  event_name: 'refund',
  sale_id: '9754283f-9242-45a1-93bb-50d442fcb177',
  status: 'refunded',
  payment_method: 'pix',
  installments: 1,
  card: [{ brand: 'hiper', last_four_digits: '5131' }],
  pix: null,
  billet: null,
  created_at: '2022-09-22T18:10:17.000Z',
  updated_at: '2022-09-22T18:13:30.000Z',
  paid_at: '2022-09-22T18:10:17.000Z',
  product: {
    id: '6566823b-c078-4c00-9c32-dc96998e99fd',
    name: 'Produto Video Único',
  },
  customer: {
    full_name: 'Danilo de Maria1',
    email: 'daniloctg@msn.com',
    whatsapp: '47999116697',
    document_number: '33794500067',
  },
  subscription: {
    id: '9c8751ca-ffe1-4538-a245-a78579a1dc33',
    start_date: '2022-09-19T18:30:35.000Z',
    next_charge: '2022-10-19',
    status: 'active',
    plan: {
      id: 'f52d1e12-a09a-4af9-bec9-2ced902d4ef7',
      name: 'Assinatura',
      frequency: 'month',
    },
  },
  refund: {
    reason: 'Sem qualidade',
    created_at: '2022-09-22T18:10:37.000Z',
    cost: 0,
  },
};

// Assinatura cancelada
const canceledSubscription = {
  event_name: 'canceled-subscription',
  sale_id: '7310f4fc-141e-4d4c-ae2e-d4aa0d268016',
  status: 'paid',
  payment_method: 'card',
  installments: 1,
  card: [{ brand: 'hiper', last_four_digits: '5131' }],
  pix: null,
  billet: null,
  created_at: '2022-09-22T18:41:49.000Z',
  updated_at: '2022-09-22T18:41:49.000Z',
  paid_at: '2022-09-22T18:41:49.000Z',
  product: {
    id: '878e4441-4715-4445-8910-14353ff2df8e',
    name: 'Produto Assinatura',
  },
  customer: {
    full_name: 'Danilo de Maria1',
    email: 'daniloctg@msn.com',
    whatsapp: '47999116697',
    document_number: '33794500067',
  },
  subscription: {
    id: '5e8a6df1-f828-411b-ba4c-77b0db34b5b9',
    start_date: '2022-09-22T18:41:49.000Z',
    next_charge: '2022-10-22',
    status: 'active',
    plan: {
      id: 'f52d1e12-a09a-4af9-bec9-2ced902d4ef7',
      name: 'Assinatura',
      frequency: 'month',
    },
  },
  charges: [
    {
      id: '287a1358-fda1-46e9-bdab-4686949b5151',
      amount: 100,
      status: 'paid',
      created_at: '2022-09-22T18:41:49.000Z',
    },
  ],

  refund: null,
};

// Assinatura renovada
const renewedSubscriptions = {
  event_name: 'renewed-subscription',
  sale_id: '7310f4fc-141e-4d4c-ae2e-d4aa0d268016',
  status: 'paid',
  payment_method: 'card',
  installments: 1,
  card: [{ brand: 'master', last_four_digits: '6344' }],
  pix: null,
  billet: null,
  created_at: '2022-09-22T18:41:49.000Z',
  updated_at: '2022-09-22T18:41:49.000Z',
  paid_at: '2022-09-22T18:41:49.000Z',
  product: {
    id: '878e4441-4715-4445-8910-14353ff2df8e',
    name: 'Produto Assinatura',
  },
  customer: {
    full_name: 'Danilo de Maria1',
    email: 'daniloctg@msn.com',
    whatsapp: '47999116697',
    document_number: '33794500067',
  },
  subscription: {
    id: '5e8a6df1-f828-411b-ba4c-77b0db34b5b9',
    start_date: '2022-09-22T18:41:49.000Z',
    next_charge: '2022-10-22',
    status: 'active',
    plan: {
      id: 'f52d1e12-a09a-4af9-bec9-2ced902d4ef7',
      name: 'Assinatura',
      frequency: 'month',
    },
  },
  charges: [
    {
      id: '287a1358-fda1-46e9-bdab-4686949b5151',
      amount: 100,
      status: 'paid',
      created_at: '2022-09-22T18:41:49.000Z',
    },
  ],
  refund: null,
};

module.exports = {
  headers,
  approvedPayemntBody,
  refundBody,
  canceledSubscription,
  renewedSubscriptions,
};
