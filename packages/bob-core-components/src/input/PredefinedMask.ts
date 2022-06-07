import 'core-js/features/object/assign';
import 'core-js/features/string/repeat';
import 'core-js/features/string/pad-start';
import 'core-js/features/string/pad-end';
import 'core-js/features/global-this'
import "core-js/features/array/find";
import "core-js/features/object/assign";
import "core-js/features/promise";
import "core-js/features/string/ends-with";
import "core-js/features/symbol/for";
import "core-js/features/weak-set";

import emailPhone from './predefinedMask/EmailPhone';
import phone from './predefinedMask/Phone';
import email from './predefinedMask/Email';
import dateOfBirth from './predefinedMask/DateOfBirth';

export default { emailPhone, email, phone, dateOfBirth } as const;
