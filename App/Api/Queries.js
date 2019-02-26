import gql from 'graphql-tag';

const RESERVATIONS = gql`
  query Reservations($where: ReservationWhereInput, $skip: Int) {
    reservations(where: $where, first: 20, skip: $skip) {
      id
      hotelName
      name
      departureDate
      arrivalDate
    }
  }
`;
export {RESERVATIONS};
