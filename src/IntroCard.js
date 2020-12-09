import React from 'react';
import { CardBody, CardText, Card } from 'reactstrap';

const bodyStyle = {
    color: 'black',
    textAlign: 'left',
    padding: "10px",
}

const IntroCard = (props) => {

    return (
        <div>
            <Card>
                <CardBody style={bodyStyle} >
                    <CardText><big>Dear all
<br/>
<p>
As we approach the New Year. Let us get into a habit of memorizing scriptures.

Here is what we are planning to do together as a sector for the coming year.

Every month we will have 2 scripture to memorize.
</p>
<p>
The Bible is a gift that offers us so much. However, like a box full of treasure, it does us no good unless we have the keys to unlock it.

One of the keys to unlocking the Bible is Scripture memorization. Nothing will do more for your Christian life than developing the habit of memorizing Bible verses.
</p>
<p>

A habit will assist you in overcoming temptation. Psalm 119:11 says, “I have hidden your word in my heart that I might not sin against you” (NIV). Memorizing the Bible helps you to resist temptation.

John 15:7 says that having God’s Word in your heart also leads to answered prayers. It says, “If you abide in me, and my words abide in you, ask whatever you wish, and it will be done for you” (ESV).
</p>
<p>

Memorizing Scripture also helps you have victory over worry, keeps you encouraged, and develops your prayer life. Having God’s Word memorized makes it easier to counsel and share the Good News of Jesus with other people because you have Bible verses always at the ready.
</p>
<p>

Think of all the times during the day that you pick up your smartphone—maybe as you are waiting for the bus, or your lunch break, or sitting on your couch in the evening. What if you spent those times memorizing Scripture instead? In your lifetime, you would probably memorize several books of the Bible that way.
</p>
<p>

If you are new to Scripture memory, start with just one verse a week. Write the verse on a piece of paper or in a note on your phone. Pull it out and look at it several times a day. In addition, when you are ready to move on to the next verse, keep reviewing the ones you have already memorized.

It is important to get a partner— maybe a friend, coworker, spouse, or child. Say your verses to each other and encourage each other to keep up the habit.
</p>
<p>

As you memorize the Bible, you will find yourself changing for the better: “Remember what Christ taught, and let his words enrich your lives and make you wise” (Colossians 3:16 TLB).

Think about the things you have memorized—song lyrics, a work or school anthem, or even Bible verses. How does having those things memorized affect your life?

Who could be your partner in Scripture memorization? Make plans to contact that person in the next day and ask them to join you.

Choose one verse to memorize. Write it down in a place where you will see it often. Make it your goal to memorize it in one week, and then choose another.
</p>

</big></CardText>
                    <hr />
                </CardBody>
            </Card>
        </div>
    );
}

export default IntroCard;