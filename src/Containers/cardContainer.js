
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardList from '../Components/cardList';
import { createStructuredSelector } from 'reselect';
import { makeSelectCardData } from '../Selector/cardSelector';


const mapStateToProps = createStructuredSelector({
  cardList: makeSelectCardData(),
});

export default connect(mapStateToProps)(CardList);