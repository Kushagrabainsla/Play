/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import './Legals.css';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Divider } from 'antd';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';

function Legals(props) {
    const { legalTitle } = props;
    const history = useHistory();

    if (legalTitle === 'privacy-policy') {
        return (
            <div className='legal-page-container'>
                <Helmet>
                    <title>Privacy Policy / Play</title>
                </Helmet>
                <div className='legals-header-container'>
                    <RiArrowLeftSLine
                        onClick={() => history.goBack()}
                        style={{
                            fontSize: 35,
                            cursor: 'pointer',
                            marginRight: '20px',
                        }}
                    />
                    <div style={{ fontSize: '28px', fontWeight: '500' }}>Privacy Policy for Play</div>
                </div>
                <Divider/>
                <p>At Play, accessible from <a href="https://officialplay.me">https://officialplay.me</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Play and how we use it.</p>

                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Play. This policy is not applicable to any information collected offline or via channels other than this website.</p>
                <br/>
                <h2>Consent</h2>

                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                <br/>
                <h2>Information we collect</h2>
                <p>We at play, will be using YouTube data API and People API provided by google.</p>

                <p>We will use the YouTube data api to read user's YouTube liked videos, and use that playlist as one of the many parameters for our matching algorithm to match the user with other users on our platform.</p>
                <p>We will use the people api for necessary details like user's gender, his/her profile picture, his/her profile name, etc. We will access the user data on the application's client-side, and then send it securely to the server side for our use case. And this is how we plan to utilise google user data we get from the scopes.</p>

                <p>The personal information that you are asked to provide at the time of Sign up:</p>
                <ul>
                <li>See your primary Google Account email address</li>
                <li>See your personal info, including any personal info you've made publicly available</li>
                <li>View your YouTube account</li>
                <li>See your gender</li>
                </ul>
                <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
                <br/>
                <h2>How we use your information</h2>

                <p>We use the information we collect in various ways, including to:</p>

                <ul>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
                <li>Match you with other users</li>
                </ul>
                <br/>
                <h2>Log Files</h2>

                <p>Play follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
                <br/>
                <h2>Cookies and Web Beacons</h2>

                <p>Like any other website, Play uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

                <br/>
                <h2>Advertising Partners Privacy Policies</h2>

                <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Play.</p>

                <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Play, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                <p>Note that Play has no access to or control over these cookies that are used by third-party advertisers.</p>
                <br/>
                <h2>Third Party Privacy Policies</h2>

                <p>Play's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

                <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
                <br/>
                <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

                <p>Under the CCPA, among other rights, California consumers have the right to:</p>
                <p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
                <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
                <p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
                <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                <br/>
                <h2>GDPR Data Protection Rights</h2>

                <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                <p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
                <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
                <p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
                <p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
                <p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
                <p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
                <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                <br/>
                <h2>Children's Information</h2>

                <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                <p>Play does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                <Divider/>
                <br/>
            </div>
        );
    }
}

Legals.propTypes = {
    legalTitle: PropTypes.string,
};

export default Legals;
