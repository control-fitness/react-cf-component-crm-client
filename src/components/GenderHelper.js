import I18n from 'react-cf-helper-i18n';

const GenderHelper = function GenderHelper(type) {
  return (type === 0) ? I18n.t('crm.client.form.female') : I18n.t('crm.client.form.male');
};

export default GenderHelper;
